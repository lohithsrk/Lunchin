import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home.screen';
import FlashScreen from './src/screens/FlashScreen.screen';

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='FlashScreen'>
				<Stack.Screen
					name='FlashScreen'
					component={FlashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
