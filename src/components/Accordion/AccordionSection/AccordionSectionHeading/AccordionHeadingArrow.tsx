import { defineComponent } from "vue";
import { ChevronRightIcon } from '@heroicons/vue/20/solid';

const AccordionHeadingArrow = defineComponent({
    name: 'AccordionHeadingArrow',
    render() {
        return(
            <div id={'__accordion__section__arrow__'} class={"w-8 h-8 rounded-full bg-white text-gray-700"}>
                <ChevronRightIcon />
            </div>
        )
    }
})

export default AccordionHeadingArrow