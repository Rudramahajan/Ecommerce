import { checkToken } from "utils/commonservices/localstorageservices";
import PrivateRoutes from "routes/HOC/privateroutes/PrivateRoutes";
import PublicRoutes from "routes/HOC/publicroutes/PublicRoutes";

const RouteValidator = ({ hasAuth, component }) => {
    const isLogin = checkToken();
    if (hasAuth) {
        return (<PrivateRoutes isLogin={isLogin} component={component} />)
    } else {
        return (<PublicRoutes isLogin={isLogin} component={component} />)
    }
}

export default RouteValidator;


