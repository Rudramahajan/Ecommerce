import { Route, Routes } from "react-router-dom";
import routelist from "./routeList";
import RouteValidator from "./validations/RouteValidator";


const MyRoutes = () => {
    return (
        <>
            <Routes>
                {
                    routelist.map((route) => {
                        return (
                            <Route
                                path={route.path}
                                element={<RouteValidator {...route} />}
                            />

                        )
                    })
                }
            </Routes>
        </>
    )
};

export default MyRoutes;