import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Text } from "react-native";

// UI KITTEN
import { Input, Layout, Icon, Button } from "@ui-kitten/components";

// FIREBASE
// import firebase from "../../../firebaseConfig";
import firebase from "firebase";

const AlertIcon = (props: any) => (
	<Icon {...props} name="alert-circle-outline" />
);

const Login = ({ navigation }) => {
	const [loading, setLoading] = React.useState(false);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [secureTextEntry, setSecureTextEntry] = React.useState(true);

	const toggleSecureEntry = () => {
		setSecureTextEntry(!secureTextEntry);
	};

	const renderEyeIcon = (props: any) => (
		<TouchableWithoutFeedback onPress={toggleSecureEntry}>
			<Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
		</TouchableWithoutFeedback>
	);

	const login = () => {
		if (!email) return;
		if (!password) return;

		setLoading(true);
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(res => console.log("hurrah", res))
			.catch(err => console.log("oh noo", err))
			.finally(() => setLoading(false));
	};

	return (
		<Layout
			style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}
			level="3"
		>
			<Button onPress={() => navigation.navigate("SignUp")}>
				Go To Sign Up
			</Button>
			<Input
				label="Email"
				placeholder="cr7@juve.com"
				size="large"
				value={email}
				onChangeText={val => setEmail(val)}
				style={styles.my__10}
			/>

			<Input
				label="Password"
				placeholder="never$gonna@guess*it"
				size="large"
				caption="Should contain at least 8 symbols"
				accessoryRight={renderEyeIcon}
				captionIcon={AlertIcon}
				secureTextEntry={secureTextEntry}
				value={password}
				onChangeText={val => setPassword(val)}
				style={styles.my__10}
			/>

			<Button
				status="primary"
				// size="large"
				style={styles.mt__30}
				onPress={login}
				disabled={loading}
			>
				Login {loading && "..."}
			</Button>
		</Layout>
	);
};

const styles = StyleSheet.create({
	my__10: { marginVertical: 10 },
	mt__30: { marginVertical: 30 },
});

export default Login;
