import React from "react";
import { View } from "react-native";

// REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";

// UI KITTEN
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

// NAVIGATORS
import HomeNavigator from "./src/navigators/HomeNavigator";

// SCREENS

const App = () => {
	const [theme, setTheme] = React.useState<"light" | "dark">("light");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return (
		<NavigationContainer>
			<ApplicationProvider {...eva} theme={eva[theme]}>
				<IconRegistry icons={EvaIconsPack} />
				<HomeNavigator />
			</ApplicationProvider>
		</NavigationContainer>
	);
};

export default App;
