import { defineComponent, inject } from "vue";
const AccordionHeadingTitle = defineComponent({
    name: 'AccordionHeadingTitle',
    setup(){
        const id        = inject("id");
        const title     = inject("title");
        const subtitle  = inject("subtitle");
        return {
            id, title, subtitle
        }
    },
    render() {
        return(
            <div id={'__accordion__section__title__'} class={"flex flex-col p-2"}>
                <span class={"text-black font-normal"}>{ this.title }</span>
                <span class={"font-normal text-gray-500"}>{ this.subtitle } { this.id }</span>
            </div>
        )
    }
})

export default AccordionHeadingTitle