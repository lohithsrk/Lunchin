import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp() {
	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
			<View
				style={{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10
				}}
			>
				<View style={{ alignItems: 'center',width:'100%' }}>
					<Text style={{ fontSize: 40, fontWeight: '700' }}>Sign Up</Text>
					<View
						style={{
							backgroundColor: '#5D5FEF',
							width: 90,
							height: 3,
						}}
					></View>
				</View>
			</View>
			<View>
				<Image source={require('../../assets/Signup/avatar.png')} />
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
