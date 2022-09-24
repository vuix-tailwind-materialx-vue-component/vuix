import { ref } from 'vue';
import anime from 'animejs';
/**
 * Allow the target element to expand show/hide with smoth transition
 * 
 * 
 * @param {HTMLElement} e The element target that need to using this utility
 * @param {Object|null} options
 * @returns 
 */
export function useExpandablePanel(e: HTMLElement, options?: {}) {

    // TODO IMPLEMENT OPTION SO USER CAN EASE CONFIG THIS BEHAVIOUR

    /**
     * Encapsule elenment state
     */
    const element = ref(e);
    const currentHeight = ref(element.value.offsetHeight);

    element.value.children[1].classList.toggle("hidden")

    if(element.value.dataset.isExpanded === "true"){
        element.value.style.removeProperty("height") // clean up style anj
        element.value.setAttribute("data-is-expanded", "false")
        element.value.style.height = element.value.scrollHeight + "px"
    } else {
        element.value.style.removeProperty("height") // clean up style anj
        element.value.setAttribute("data-is-expanded", "true")
        element.value.style.height = element.value.offsetHeight + "px"
    }

    /**
     * Animate when the targeted element has been transformed
     * 
     * @param {HTMLElement} element - An element target that will be animated when their inner state has been changed
     * @param {number} from - Number of state change for entering transition
     * @param {number} to - Number of state change for leaving transition
     */
    const animateTransition = (element: HTMLElement, from: number, to: number) => {
        anime({
            targets: element,
            height: [from, to],
            easing: "linear",
            duration: 500,
        })
    }

    /**
     * Initialize expandable object
     */
    const init = () => {
        animateTransition(element.value, currentHeight.value, element.value.scrollHeight);
    }

    return {
        init
    }
}