import { computed } from "@vue/reactivity";
import { defineComponent, defineEmits, inject, onMounted, ref} from "vue";
import AccordionHeadingArrow from "./AccordionHeadingArrow";
import AccordionHeadingIcon from "./AccordionHeadingIcon";
import AccordionHeadingTitle from "./AccordionHeadingTitle";

/**
 * Acccordion Section Heading Component
 */
export default defineComponent({
    name: 'AccordionSectionHeading',
    setup(props, { emit }){
        const id = inject("id")
        const isOpen = ref(inject("isOpen"))

        const toogleActiveClass = computed(() => {
            return isOpen.value  === true ? "bg-gray-200 text-black" : "bg-none";
        })

        const arrowIcon = ref();

        return {
            id,
            isOpen,
            toogleActiveClass,
            arrowIcon,
        }
    },
    emits: ["headingClicked"],
    render(){
        return (
            <div 
                id={'__accordion__section__heading__' + this.id} 
                class={"flex flex-row items-center justify-between border-b px-8 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition-all 0.5s ease-in-out" + this.toogleActiveClass } 
                onClick={
                (e: Event) => {
                    e.preventDefault()
                    // this.$emit("headingClicked");
                    this.$emit("headingClicked")
                    const arrowElement: HTMLElement = this.arrowIcon.$el as HTMLElement
                    arrowElement.classList.toggle("rotate-90")
                }
            }>
                <AccordionHeadingIcon class={"flex-none w-14"}/>
                <AccordionHeadingTitle class={"grow w-full"}/>
                <AccordionHeadingArrow ref={(el) => {
                    this.arrowIcon = el
                }} class={"flex-none w-10 h-10 transition-all duration-500"}/>
            </div>  
        )
    }
})
