import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import { About } from "../pages/About";
import Menu from "../pages/Menu";
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.menu, component: Menu }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }