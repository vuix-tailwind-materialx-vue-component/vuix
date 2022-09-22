import { provide, toRefs, type PropType, defineComponent, computed } from "vue";
import type { AccordionItem } from "../../Accordion/Accordion";
import AccorrdionSectionContent from "./AccordionSectionContent";
import AccordionSectionHeading from "./AccordionSectionHeading";

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
    setup(props){
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

        const sectionIsActive = computed(() => {
            return props.element.isOpen
        })

        return {
            currentElementId,
            sectionIsActive
        }
    },
    render(){
        return (
            <div id={'__accordion__section__' + (this.currentElementId)} class={"flex flex-col h-auto border-b hover:bg-gray-200 hover:cursor-pointer"}>
                <AccordionSectionHeading /> 
                { this.sectionIsActive ? <AccorrdionSectionContent />  : ''}
            </div>
        )
    }
})

export default AccordionSection