import React from "react";
import { useEffect } from "react";
import EditProfile from "./EditProfile";
import Payments from "./Payments";
import { Link, Route, Switch, useHistory , useRouteMatch} from "react-router-dom";
const Profile = ({ isLoggedIn }) => {
    const {url, path} =useRouteMatch()
    const history = useHistory();

  // //this is to redirect the user to homepage if not loggedin
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     history.push("/");
  //   }
  // },[isLoggedIn, history]);
  return (
    <>{isLoggedIn ?
    <> "Welcome to Profile!" 
    <ul>
        <li><Link to={`${url}/EditProfile`}>Edit Profile</Link></li>
        <li><Link to={`${url}/Payments`}>Payments</Link></li>
        
    </ul>
    </>
    
    
    : "You are not authorized"}
    <Switch>
        <Route path={`${path}/EditProfile`} component={EditProfile}/>
        <Route path={`${path}/Payments`} component={Payments}/>
    </Switch>
    </>
  );
};
export default Profile;
