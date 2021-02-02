import React from "react";

// REACT NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { HomeScreen } from "../screens/Home";
import { DetailsScreen } from "../screens/Details";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
	<Navigator>
		<Screen name="Home" component={HomeScreen} />
		<Screen name="Details" component={DetailsScreen} />
	</Navigator>
);

export default HomeNavigator;
