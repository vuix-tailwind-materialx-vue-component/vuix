import { defineComponent } from 'vue';
const List = defineComponent({
    name: "List",
    render() {
        return (
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Profile</li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Settings</li>
                <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Messages</li>
                <li class="py-2 px-4 w-full rounded-b-lg">Download</li>
            </ul>
        )
    }
})

export default List