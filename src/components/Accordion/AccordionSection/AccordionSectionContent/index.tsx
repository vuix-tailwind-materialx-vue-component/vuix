import { defineComponent, inject } from "vue";

const AccorrdionSectionContent = defineComponent({
    name: "AccordionSectionContent",
    setup(){
        const id = inject("id")
        const isOpen = inject("isOpen")
        return {
            id, isOpen
        }
    },
    render() {
        return (
            <div id={'__accordion__section__content__' + this.id} class={"border-b p-8 hidden"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi iste, assumenda praesentium iure magni voluptates voluptas dolorum ipsum molestiae minus debitis exercitationem. Quas consectetur, laudantium tempore voluptatem minus modi.
            </div>
        )
    }
})

export default AccorrdionSectionContent