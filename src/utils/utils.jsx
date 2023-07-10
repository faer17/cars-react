/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";
import { TermsAndConditionPage } from "../pages/TermsAndConditionPage";

export const navbar = [
    {
        path:'/home',
        element: <HomePage/>,
        name:"Home",
        id:1
    },
    {
        path:'/cars',
        element: <CarsPage/>,
        name:"Cars",
        id:2
    },
    {
        path:'/book',
        element: <BookNowPage/>,
        name:"Book",
        id:3
    },
    {
        path:'/terms',
        element: <TermsAndConditionPage/>,
        name:"Terms And Condition",
        id:4
    }
]