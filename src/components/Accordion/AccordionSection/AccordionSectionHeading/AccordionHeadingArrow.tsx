import { defineComponent } from "vue";
import { ChevronRightIcon } from '@heroicons/vue/20/solid';

const AccordionHeadingArrow = defineComponent({
    name: 'AccordionHeadingArrow',
    render() {
        return(
            <div id={'__accordion__section__arrow__'} class={"w-auto h-auto text-gray-500"}>
                <ChevronRightIcon class={"w-8 h-8"}/>
            </div>
        )
    }
})

export default AccordionHeadingArrow