import React from "react";
import {Route, Redirect}from 'react-router-dom'
import { useGlobalUserProvider } from "../context/user";
export default function PrivateRoute({children,...rest}) {
  const {user}= useGlobalUserProvider();
  return <Route {...rest} render = {()=>{
    return user.token?children:<Redirect to ="*"/>
  }} >
    
  </Route>
}
