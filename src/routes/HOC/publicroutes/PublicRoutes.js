import { Navigate} from "react-router-dom";
import MainLayout from "components/layout/mainlayout/index";
const PublicRoutes = ({isLogin,component}) =>{
    return isLogin ? <Navigate to='/home' /> : <MainLayout>{component}</MainLayout>;
}
export default PublicRoutes;