import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import {About} from "../pages/About";
import {Reservation} from "../pages/Reservation";
import {Contact} from "../pages/Contact";

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.reservation, component: Reservation },
    { path: routes.contact, component: Contact },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }