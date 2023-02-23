import Navbar from "components/layout/header/index.jsx"
import Footer from "components/layout/footer/index";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;