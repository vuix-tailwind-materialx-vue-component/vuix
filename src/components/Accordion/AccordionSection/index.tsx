import { provide, toRefs, type PropType, defineComponent, computed, ref, Transition, onMounted } from "vue";
import type { AccordionItem } from "../../Accordion/Accordion";
import AccorrdionSectionContent from "./AccordionSectionContent";
import AccordionSectionHeading from "./AccordionSectionHeading";
import anime from "animejs";
import { useExpandablePanel } from "@/composable/expandable-panel";


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
                }}>
                <AccordionSectionHeading onHeadingClicked={() => {
                    const accordionSectionWrapper   = (this.accordionSectionRef as HTMLElement);
                    const { init } = useExpandablePanel(accordionSectionWrapper)
                    init();
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