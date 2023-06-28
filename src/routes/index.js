import Home from "../pages/Home"
import Intro from "../pages/Intro"
import Blog from "../pages/Blog"
import HeaderOnly from "../layouts/HeaderOnly"

const publicRoutes = [
    {
        path: '/',
        component: Home
    }, 
    {
        path: '/gioi-thieu',
        component: Intro,
        layout: HeaderOnly
    }, 
    {
        path: '/blog',
        component: Blog,
        layout: null
    }
]

export {publicRoutes};