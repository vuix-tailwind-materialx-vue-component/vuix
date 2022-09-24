import { defineComponent, inject } from "vue";

const AccorrdionSectionContent = defineComponent({
    name: "AccordionSectionContent",
    setup(){
        const id = inject("id")
        const isOpen = inject("isOpen")
        const content = inject("content")
        return {
            id, isOpen, content
        }
    },
    render() {
        return this.content !== undefined ? this.content : <div class={"border-b p-8 hidden w-auto h-auto bg-white"}>Deault Content</div> 
    }
})

export default AccorrdionSectionContent