import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface AuthRouteProps extends RouteProps {
    render : (props : any) => React.ReactNode;
    authenticated : boolean;

}
const AuthRoute = ( props : AuthRouteProps ) => {
   const { authenticated, render} = props;
    return (
        <Route
            {...props}
            render={(props) =>
            authenticated ? (
                render(props)
            ) : (
                <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
                />
            )
            }
        />
    );
}

export default AuthRoute;
