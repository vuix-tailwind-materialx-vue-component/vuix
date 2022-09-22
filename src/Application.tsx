import { defineComponent, reactive } from 'vue';
import { Accordion } from '@/components';
import type { AccordionItem } from '@/components';
import { FingerPrintIcon, KeyIcon, MapIcon, RadioIcon, WalletIcon } from '@heroicons/vue/20/solid';


const ContentForSectionOne = defineComponent({
    name: 'ContentForSectionOne',
    render(){
        return (
            <div class={"bg-gray-100 w-full h-auto"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
            </div>
        )
    }
})

const initialListItems : AccordionItem[] = [
    {
        id: 0,
        icon: <FingerPrintIcon/>,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: <ContentForSectionOne/> 
    },
    {
        id: 1,
        icon: <KeyIcon/> ,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: {}
    },
    {
        id: 2,
        icon: <RadioIcon /> ,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: {}
    },
    {
        id: 3,
        icon: <WalletIcon /> ,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: {}
    },
    {
        id: 4,
        icon: <MapIcon /> ,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: {}
    },
]

export default defineComponent({
    name: 'Application',
    setup(){
        const items : AccordionItem[] = reactive(initialListItems)
        return {
            items
        }
    }, 
    render(){
        return (
            <div class={'bg-gray-200 min-w-screen min-h-screen mx-auto p-8'}>
                <Accordion items={this.items}/>
            </div>
        )
    }
})


