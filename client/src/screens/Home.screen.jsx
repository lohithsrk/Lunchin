import React from 'react';
import { View, Text, StatusBar, Image, SafeAreaView } from 'react-native';

export default function Home() {
	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
			<View
				style={{
					width: '100%',
					height: 20,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 25
				}}
			>
				<Text style={{ fontSize: 40, fontWeight: '700' }}>Lunchin'</Text>
				<View
					style={{ backgroundColor: '#5D5FEF', width: 60, height: 3 }}
				></View>
			</View>
			<View>
				<Text>Hey there, Welcome to Lunchin'!</Text>
			</View>
			<Image
				source={require('../../assets/Signup/chef1.png')}
				style={{ position: 'absolute', bottom: 0,zIndex:1 }}
			/>
			<Image
				source={require('../../assets/Signup/bg1.png')}
				style={{ position: 'absolute', bottom: 0, width:'100%' }}
			/>
		</SafeAreaView>
	);
}
