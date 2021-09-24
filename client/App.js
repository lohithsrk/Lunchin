import React from 'react';
import { SafeAreaView } from 'react-native';

import SignUp from './src/screens/signup/Sign-Up.screen';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<SignUp />
		</SafeAreaView>
	);
}
