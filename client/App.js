import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeSignup from './src/screens/WelcomeSignup.screen';
import FlashScreen from './src/screens/FlashScreen.screen';
import SignUp from './src/screens/SignUp.screen';
import ApprovalScreen from './src/screens/Approval.screen';
import Login from './src/screens/Login.screen';

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='SignUp'>
				<Stack.Screen
					name='FlashScreen'
					component={FlashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='WelcomeSignup'
					component={WelcomeSignup}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUp}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='ApprovalScreen'
					component={ApprovalScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
