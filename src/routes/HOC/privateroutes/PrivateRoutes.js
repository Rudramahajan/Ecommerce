import { Navigate } from 'react-router-dom'
import MainLayout from 'components/layout/mainlayout/index';
const PrivateRoutes = ({ isLogin, component }) => {
    return isLogin ?
        (
            <MainLayout>{component}</MainLayout>
        ) : <Navigate to='/' />
}
export default PrivateRoutes;