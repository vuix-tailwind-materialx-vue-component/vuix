import { provide, toRefs, type PropType, defineComponent, computed, ref, Transition, onMounted } from "vue";
import type { AccordionItem } from "../../Accordion/Accordion";
import AccorrdionSectionContent from "./AccordionSectionContent";
import AccordionSectionHeading from "./AccordionSectionHeading";
import anime from "animejs";


/**
 * Accordion Section Wrapper Component
 * 
 * Main entry point for each Accordion Section 
 * 
 * Wrap a provied list of accordion content inside a section
 */
const AccordionSection = defineComponent({
    name: 'AccordionSection',
    props:{
        element: {
            type: Object as unknown as PropType<AccordionItem>,
            required: true
        }
    },
    setup(props, { attrs, emit, slots, expose }){
        const { id, title, subtitle, icon, isOpen, content } = toRefs(props.element);
        provide("id", id)
        provide("title", title)
        provide("subtitle", subtitle)
        provide("icon", icon)
        provide("isOpen", isOpen)
        provide("content", content)

        // @ts-ignore
        const currentElementId = computed(() => {
            return props.element.id
        })

        // @ts-ignore
        const sectionId = ref(id);
        const accordionSectionRef = ref();

        const currentHeight = ref(0);

        onMounted(() => {
            currentHeight.value = (accordionSectionRef.value as HTMLElement).offsetHeight;
        })

        onMounted(() => {
            const accordionSectionElement = accordionSectionRef.value as HTMLElement;
            accordionSectionElement.setAttribute("data-is-expanded", (isOpen.value as unknown as string))
        })

        return {
            sectionId,
            isOpen,
            currentElementId,
            accordionSectionRef,
            currentHeight
        }
    },
    render(){
        return (
            <div 
                id={'__accordion__section__' + (this.currentElementId)} 
                class={"flex flex-col bg-white"}
                ref={(el) => {
                    this.accordionSectionRef = el
                }}
                >

                <AccordionSectionHeading onHeadingClicked={() => {
                    this.isOpen = !this.isOpen;
                    
                    const accordionSectionWrapper = (this.accordionSectionRef as HTMLElement);

                    const height = accordionSectionWrapper.offsetHeight;

                    accordionSectionWrapper.children[1].classList.toggle("hidden")

                    if(accordionSectionWrapper.dataset.isExpanded === "true"){
                        accordionSectionWrapper.style.removeProperty("height") // clean up style anj
                        accordionSectionWrapper.setAttribute("data-is-expanded", "false")
                        accordionSectionWrapper.style.height = accordionSectionWrapper.scrollHeight + "px"
                    } else {
                        accordionSectionWrapper.style.removeProperty("height") // clean up style anj
                        accordionSectionWrapper.setAttribute("data-is-expanded", "true")
                        accordionSectionWrapper.style.height = accordionSectionWrapper.offsetHeight + "px"
                    }

                    heightChangeTransition(accordionSectionWrapper, height, accordionSectionWrapper.scrollHeight)

                }}/>

                <AccorrdionSectionContent/>
            </div>
        )
    }
})

const heightChangeTransition = (targetElement: HTMLElement, from: number, to: number) => {
    anime({
        targets: targetElement,
        height: [from, to],
        easing: "linear",
        duration: 500,
    })
}

export default AccordionSection