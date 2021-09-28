import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Image,
	Animated,
	TouchableOpacity
} from 'react-native';
import CustomButton from '../components/CustomButton.component';

export default function FlashScreen({ navigation }) {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: StatusBar.currentHeight
			}}
		>
			<Animated.View
				style={{
					backgroundColor: '#5D5FEF',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Animated.View style={{ position: 'absolute', top: 0, right: 0 }}>
					<Image source={require('../../assets/Loading_Screen/aside1.png')} />
				</Animated.View>
				<Animated.View>
					<Image source={require('../../assets/Loading_Screen/chef_hat.png')} />
				</Animated.View>
				<Animated.View style={{ position: 'absolute', bottom: 0, left: 0 }}>
					<Image source={require('../../assets/Loading_Screen/aside2.png')} />
				</Animated.View>
				<CustomButton />
			</Animated.View>
		</SafeAreaView>
	);
}
