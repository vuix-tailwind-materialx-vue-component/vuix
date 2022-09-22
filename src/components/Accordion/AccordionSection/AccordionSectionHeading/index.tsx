import { computed } from "@vue/reactivity";
import { defineComponent, inject, ref} from "vue";
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
        const isOpen = ref(inject("isOpen"))

        const toogleActiveClass = computed(() => {
            return isOpen.value  === true ? "bg-gray-300" : "bg-none";
        })

        const arrowIcon = ref();

        return {
            id,
            isOpen,
            toogleActiveClass,
            arrowIcon
        }
    },
    render(){
        return (
            <div 
                id={'__accordion__section__heading__' + this.id} 
                class={"flex flex-row items-center justify-between px-4 hover:bg-gray-200 hover:cursor-pointer " + this.toogleActiveClass } 
                onClick={
                (e: Event) => {
                    e.preventDefault()
                    this.$emit("headingClicked");
                    const arrowElement: HTMLElement = this.arrowIcon.$el as HTMLElement
                    arrowElement.classList.toggle("rotate-90")
                }
            }>
                <AccordionHeadingIcon class={"flex-none w-14 mr-4"}/>
                <AccordionHeadingTitle class={"grow w-full"}/>
                <AccordionHeadingArrow ref={(el) => {
                    this.arrowIcon = el
                }} class={"flex-none w-14"}/>
            </div>  
        )
    }
})
