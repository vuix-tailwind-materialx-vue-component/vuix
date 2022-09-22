import { defineComponent,  type PropType,  reactive} from "vue";
import AccordionSection from "./AccordionSection";
import type { AccordionItem } from "./types/AccordionType";
/**
 * Main Accordion Panel Wrapper Component
 * 
 *  Act as wrapper for current accordion instance and Map each item into acccordion section components dynamically
 *  based on how uch the numbber of provided list data
 */
const Accordion = defineComponent({
    name: "Accordion",
    props: {
        items: {
            type: Array as PropType<AccordionItem[]>,
            required: true
        }
    },
    setup(props){
        const accordionList : AccordionItem[] = reactive(props.items)
        return {
            accordionList
        }
    },
    render(){
        return (
            <div id={'__accordion__panel'} class={"w-full h-auto bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden px-6 py-4"}>
                { this.accordionList.map((e) => {
                    return <AccordionSection element={e}/>
                }) }
            </div>
        )
    }
})
export { Accordion, type AccordionItem }