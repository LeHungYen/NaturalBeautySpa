import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import {About} from "../pages/About";

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }