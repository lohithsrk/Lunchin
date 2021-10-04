import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';

export default function Cuisine() {
	return (
		<SafeAreaView style={{ flex: 1, padding: 20 }}>
			<View
				style={{
					width: '100%',
					height: 70,
					backgroundColor: '#5D5FEF',
					marginVertical: StatusBar.currentHeight,
					borderRadius: 20,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text style={{ color: 'white', fontSize: 20 }}>Pick a Cuisine</Text>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<Image source={require('../../../assets/Cuisine/North_indian.png')} />
				<Text
					style={{
						position: 'absolute',
						color: 'white',
						fontSize: 35,
						fontWeight: '700'
					}}
				>
					North Indian
				</Text>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<Image source={require('../../../assets/Cuisine/South_indian.png')} />
				<Text
					style={{
						position: 'absolute',
						color: 'white',
						fontSize: 35,
						fontWeight: '700'
					}}
				>
					South Indian
				</Text>
			</View>
		</SafeAreaView>
	);
}
