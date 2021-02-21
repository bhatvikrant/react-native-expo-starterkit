import React from "react";

// REACT NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = () => (
	<Navigator initialRouteName="Login">
		<Screen name="Login" component={Login} options={{ headerShown: false }} />
		<Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
	</Navigator>
);

export default AuthNavigator;
