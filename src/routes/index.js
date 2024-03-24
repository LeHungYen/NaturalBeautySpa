import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import { About } from "../pages/About";
import { Reservation } from "../pages/Reservation";
import { Contact } from "../pages/Contact";
import { Company } from "../pages/Company";
import Menu from "../pages/Menu";
import MainMenu from "../pages/Menu/Main";
import PricacyPolicy from "../pages/PrivacyPolicy";
import News from "../pages/News";
import { AboutDetail } from "../pages/AboutDetail";
import { Product } from "../pages/Product";
import { AuthenticationEmail } from "../components/Login/SignUp/AuthenticationGmail";
import { NullLayout } from '../layouts/NullLayout/index.js'
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.menu, component: Menu },
    { path: routes.mainMenu, component: MainMenu },
    { path: routes.privacyPolicy, component: PricacyPolicy },
    { path: routes.news, component: News },
    { path: routes.reservation, component: Reservation },
    { path: routes.contact, component: Contact },
    { path: routes.company, component: Company },
    { path: routes.about_message, component: AboutDetail },
    { path: routes.about_product, component: AboutDetail },
    { path: routes.about_academy, component: AboutDetail },
    { path: routes.about_access, component: AboutDetail },
    { path: routes.about_important, component: AboutDetail },
    { path: routes.about_feature, component: AboutDetail },
    { path: routes.authentication_email, component: AuthenticationEmail, layout: NullLayout }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }