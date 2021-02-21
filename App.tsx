import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

// REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";

// UI KITTEN
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

// FIREBASE
import * as firebase from "firebase";
// import firebase from "./firebaseConfig";

// NAVIGATORS
import AuthNavigator from "./src/navigators/AuthNavigator";
import HomeNavigator from "./src/navigators/HomeNavigator";

// SCREENS
import SignUp from "./src/screens/Auth/SignUp";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Get your firebaseConfig from the Firebase console
const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	measurementId: "",
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const App = () => {
	const [theme, setTheme] = React.useState<"light" | "dark">("light");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	const [loaded, setLoaded] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (!user) {
				setLoggedIn(false);
				setLoaded(true);
			} else {
				setLoggedIn(true);
				setLoaded(true);
			}
		});
	}, []);

	if (!loaded) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (!loggedIn) {
		return (
			<NavigationContainer>
				<ApplicationProvider {...eva} theme={eva[theme]}>
					<IconRegistry icons={EvaIconsPack} />
					<AuthNavigator />
				</ApplicationProvider>
			</NavigationContainer>
		);
	}

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>User is logged in</Text>
		</View>
	);
};

export default App;
