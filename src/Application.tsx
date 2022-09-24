import { defineComponent, reactive } from 'vue';
import { Accordion } from '@/components';
import type { AccordionItem } from '@/components';
import { FingerPrintIcon, KeyIcon, MapIcon, RadioIcon, WalletIcon } from '@heroicons/vue/20/solid';


const ContentForSectionOne = defineComponent({
    name: 'ContentForSectionOne',
    render(){
        return (
            <div class={"border-b p-8 hidden w-auto h-auto bg-white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
            </div>
        )
    }
})
const ContentForSectionTwo = defineComponent({
    name: 'ContentForSectionTwo',
    render(){
        return (
            <div class={"border-b p-8 hidden w-auto h-auto bg-white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus iusto praesentium mollitia vero corporis voluptatem omnis, eligendi voluptate id. Error aliquid neque aspernatur, cum recusandae et numquam dolorem culpa?
                
            </div>
        )
    }
})
const ContentForSectionBlank = defineComponent({
    name: 'ContentForSectionBlank',
    render(){
        return (
            <div class={"border-b p-8 hidden w-auto h-auto bg-white"}>
                
            </div>
        )
    }
})

const initialListItems : AccordionItem[] = [
    {
        id: 0,
        icon: <FingerPrintIcon class={"w-8 h-8"}/>,
        title: 'TItle pertama test ',
        subtitle: 'subtitle pertama',
        isOpen: false,
        content: <ContentForSectionOne/> 
    },
    {
        id: 1,
        icon: <KeyIcon class={"w-8 h-8"}/> ,
        title: 'Hello From Accoordion Section',
        subtitle: '',
        isOpen: false,
        content: <ContentForSectionTwo />
    },
    {
        id: 2,
        icon: <RadioIcon class={"w-8 h-8"}/> ,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: <ContentForSectionBlank />
    },
    {
        id: 2,
        icon: <RadioIcon class={"w-8 h-8"}/> ,
        title: 'Hello From Accoordion Section',
        subtitle: 'Current Section is ',
        isOpen: false,
        content: undefined
    }
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
                <div class={"w-2/6"}>
                <Accordion items={this.items}/>
                </div>
            </div>
        )
    }
})


