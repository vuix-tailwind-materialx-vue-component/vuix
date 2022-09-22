import type { HtmlAttributes } from "csstype";
import type { VNode } from "vue";
interface AccordionItem {
    id: number, 
    icon: VNode,
    title: string,
    subtitle: any,
    isOpen: boolean,
    content: any,
}

export { type AccordionItem }