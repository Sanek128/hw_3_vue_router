import Home from "@/components/Vizitka/Home"
import Contacts from "@/components/Vizitka/Contacts"
import MyProjects from "@/components/Vizitka/MyProjects"

export const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/contacts', component: Contacts
    },
    {
        path: '/myprojects', component: MyProjects
    },
    {
        path: '*', component: Home
    }

]