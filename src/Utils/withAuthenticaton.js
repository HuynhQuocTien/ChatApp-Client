import { useEffect, useState } from "react";
import Navigate from "../Components/Navigate";

const withAuthentication = (wrappedComponent) => {
    return function AuthComponent(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        useEffect(() => {
            const token = document.cookie.split(';').find(cookie => cookie.startsWith('token='));
            if (token) {
                setIsAuthenticated(true);
            }else{
                setIsAuthenticated(false);
            }
        }, []);

        if (isAuthenticated) {
            return <wrappedComponent {...props} />;
        }else{
            return <Navigate to = '/login' />;
        }
    }
}

export default withAuthentication;