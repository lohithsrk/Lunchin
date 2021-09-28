import React from 'react';
import {
	View,
	Text,
	StatusBar,
	Image,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

export default function WelcomeSignup({ navigation }) {
	return (
		<SafeAreaView
			style={{
				marginTop: StatusBar.currentHeight,
				flex: 1
			}}
		>
			<View
				style={{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					position: 'relative',
					marginTop: 10
				}}
			>
				<Image
					source={require('../../assets/Signup/icon.png')}
					style={{
						left: 10,
						top: 5,
						position: 'absolute'
					}}
				/>
				<View style={{ alignItems: 'center' }}>
					<Text style={{ fontSize: 40, fontWeight: '700' }}>Lunchin'</Text>
					<View
						style={{ backgroundColor: '#5D5FEF', width: 80, height: 3 }}
					></View>
				</View>
			</View>
			<View
				style={{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					marginLeft: 30,
					marginTop: 40
				}}
			>
				<Text
					style={{
						fontWeight: '700',
						fontSize: 50,
						lineHeight: 80,
						letterSpacing: 3
					}}
				>
					Hey there, Welcome to Lunchin' !
				</Text>
			</View>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					transform: [{ translateX: 30 }]
				}}
			>
				<Image
					source={require('../../assets/Signup/chat.png')}
					style={{ position: 'absolute', top: 0, width: 150, height: 40 }}
				/>
				<Text
					style={{
						position: 'absolute',
						top: 3,
						fontSize: 18
					}}
				>
					Join the fam!
				</Text>
			</View>
			<View style={{ position: 'relative', bottom: 0, flex: 1 }}>
				<Image
					source={require('../../assets/Signup/bg1.png')}
					style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 1 }}
				/>
				<Image
					source={require('../../assets/Signup/chef1.png')}
					style={{ position: 'absolute', bottom: 0, zIndex: 1 }}
				/>
				<TouchableOpacity
					activeOpacity={0.5}
					style={{
						backgroundColor: '#FFE8B2',
						alignItems: 'center',
						justifyContent: 'center',
						paddingVertical: 10,
						paddingHorizontal: 20,
						borderRadius: 30,
						marginTop: 30,
						width: '40%',
						position: 'absolute',
						top: 60,
						right: 30,
						zIndex: 3
					}}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={{ fontSize: 22, fontWeight: '700' }}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
