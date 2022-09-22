import { defineComponent, inject } from "vue";

/**
 * Accordion Section Heading Icon Component
 * 
 * Main Component Wrapper for rendering predefinned icon provided by user 
 * in root Accordion Panel
 */
 const AccordionHeadingIcon = defineComponent({
    name: 'AccordionHeadingIcon',
    setup(){
        const icon = inject("icon")
        return {
            icon
        }
    },
    render() {
        return(
            <div id={'__accordion__section__icon__'} class={"w-8 h-8 rounded-full bg-inherit text-gray-700"}>
                { this.icon }
            </div>
        )
    }
})

export default AccordionHeadingIcon