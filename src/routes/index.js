import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import {About} from "../pages/About";
import {Reservation} from "../pages/Reservation";
import {Contact} from "../pages/Contact";
import {Company} from "../pages/Company";

import { About } from "../pages/About";
import Menu from "../pages/Menu";
import MainMenu from "../pages/Menu/Main";
import PricacyPolicy from "../pages/PrivacyPolicy";
import News from "../pages/News";
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.menu, component: Menu },
    { path: routes.mainMenu, component: MainMenu },
    { path: routes.privacyPolicy, component: PricacyPolicy },
    { path: routes.news, component: News },
    { path: routes.about, component: About },
    { path: routes.reservation, component: Reservation },
    { path: routes.contact, component: Contact },
    { path: routes.company, component: Company },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }