import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//   auth

import WelcomeSignup from './src/screens/auth/WelcomeSignup.screen';
import FlashScreen from './src/screens/auth/FlashScreen.screen';
import SignUp from './src/screens/auth/SignUp.screen';
import ApprovalScreen from './src/screens/Approval.screen';
import Login from './src/screens/auth/Login.screen';
import CreatePin from './src/screens/auth/CreatePin.screen';

//   Products

import Products from './src/screens/products/Products.screen';
import Cuisine from './src/screens/products/Cuisine.screen';

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Cuisine'>
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
					name='CreatePin'
					component={CreatePin}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Products'
					component={Products}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Cuisine'
					component={Cuisine}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
