import { defineComponent, inject } from "vue";
import AccordionHeadingArrow from "./AccordionHeadingArrow";
import AccordionHeadingIcon from "./AccordionHeadingIcon";
import AccordionHeadingTitle from "./AccordionHeadingTitle";

/**
 * Acccordion Section Heading Component
 */
export default defineComponent({
    name: 'AccordionSectionHeading',
    setup(){
        const id = inject("id")
        return {
            id
        }
    },
    render(){
        return (
            <div id={'__accordion__section__heading__' + this.id} class={"flex flex-row items-center justify-between px-4"}>
                <AccordionHeadingIcon class={"flex-none w-14 mr-4"}/>
                <AccordionHeadingTitle class={"grow w-full"}/>
                <AccordionHeadingArrow class={"flex-none w-14"}/>
            </div>  
        )
    }
})
