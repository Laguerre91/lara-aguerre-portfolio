import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/HomePage/HomePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import AboutmePage from "../pages/AboutmePage/AboutmePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutmePage />} />
        </Routes>
    )
}

export default AppRoutes