import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Image,
	Animated,
	TouchableOpacity
} from 'react-native';

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
				<TouchableOpacity
					activeOpacity={0.5}
					style={{
						backgroundColor: '#EFED5D',
						alignItems: 'center',
						justifyContent: 'center',
						paddingVertical: 10,
						paddingHorizontal: 20,
						borderRadius: 30,
						marginTop: 30,
						width: '50%'
					}}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={{ fontSize: 24, fontWeight: '700' }}>LUNCHIN'</Text>
				</TouchableOpacity>
			</Animated.View>
		</SafeAreaView>
	);
}
