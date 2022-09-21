import { computed } from "@vue/reactivity";
import { defineComponent,  type PropType,  reactive, ref, onMounted, provide, toRefs, inject} from "vue";
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

/**
 * Accordion Section Wrapper Component
 * 
 * Wrap a provied list of accordion content ihside a section
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
        const { id, title, subtitle, icon, arrow, isOpen, content } = toRefs(props.element);
        provide("id", id)
        provide("title", title)
        provide("subtitle", subtitle)
        provide("icon", icon)
        provide("isOpen", isOpen)
        provide("arrow", arrow)
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
                <AccordionSectionHeading/>

                { this.sectionIsActive ? <AccordionSectionContent /> : '' }
            </div>
        )
    }
})

/**
 * Acccordion Section Heading Component
 */
const AccordionSectionHeading = defineComponent({
    name: 'AccordionSectionHeading',
    setup(){
        const id = inject("id")
        return {
            id
        }
    },
    render(){
        return (
            <div id={'__accordion__section__heading__' + this.id} class={"flex flex-row items-center justify-between"}>
                <AccordionHeadingIcon class={"w-1/6"}/>
                <AccordionHeadingTitle class={"w-full"}/>
                <AccordionHeadingArrow class={"w-1/6"}/>
            </div>  
        )
    }
})

/**
 * Accordion Section Heading Icon Component
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
            <div id={'__accordion__section__icon__'}>{ this.icon }</div>
        )
    }
})

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

const AccordionHeadingArrow = defineComponent({
    name: 'AccordionHeadingArrow',
    render() {
        return(
            <div></div>
        )
    }
})

const AccordionSectionContent = defineComponent({
    name: 'AccordionSectionConten',
    setup(props, ctx) {
        const content = inject("content");
        return {
            content
        }
    },
    render(){
        return (
            this.content
        )
    }
})
export {
    Accordion, 
    type AccordionItem
}
