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

        const currentElementId = computed(() => {
            return props.element.id
        })

        const sectionId = ref(id);
        const accordionSectionRef = ref();

        onMounted(() => {
            const accordionSectionElement = accordionSectionRef.value as HTMLElement;
            accordionSectionElement.setAttribute("data-is-expanded", (isOpen.value as unknown as string))
        })

        return {
            sectionId,
            isOpen,
            currentElementId,
            accordionSectionRef,
        }
    },
    render(){
        return (
            <div 
                id={'__accordion__section__' + (this.currentElementId)} 
                class={"flex flex-col"}
                ref={(el) => {
                    this.accordionSectionRef = el
                }}
                >

                <AccordionSectionHeading onHeadingClicked={() => {
                    this.isOpen = !this.isOpen;

                    const headingElement = (this.accordionSectionRef as HTMLElement);
                    
                    setExpandableDatasetFor(headingElement)

                    showAndHideSection(headingElement, 1)

                }}/>

                <AccorrdionSectionContent/>


            </div>
        )
    }
})

const setExpandableDatasetFor = (element: HTMLElement) => {
    if(element.dataset.isExpanded === "true"){
        element.setAttribute("data-is-expanded", "false")
    } else {
        element.setAttribute("data-is-expanded", "true")
    }
}

const showAndHideSection = (
    element: HTMLElement, 
    childrenIndex: number,
    ) => {
    if(element.children[childrenIndex].classList.contains("hidden")) {
        element.children[childrenIndex].classList.remove("hidden")
    } else {
        element.children[childrenIndex].classList.add("hidden")
    }
}

export default AccordionSection