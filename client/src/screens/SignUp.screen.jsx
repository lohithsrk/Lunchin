import React from 'react';
import {
	View,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	TextInput
} from 'react-native';

export default function SignUp() {
	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
			<ScrollView>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 30
					}}
				>
					<View style={{ alignItems: 'center', width: '100%' }}>
						<Text style={{ fontSize: 40, fontWeight: '700' }}>Sign Up</Text>
						<View
							style={{
								backgroundColor: '#5D5FEF',
								width: 90,
								height: 3
							}}
						></View>
					</View>
				</View>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#5D5FEF',
						paddingVertical: 30
					}}
				>
					<Image
						source={require('../../assets/Signup/avatar.png')}
						style={{ width: 150, height: 150 }}
					/>
					<TouchableOpacity
						activeOpacity={0.5}
						style={{
							backgroundColor: '#FFE8B2',
							alignItems: 'center',
							justifyContent: 'center',
							paddingVertical: 10,
							paddingHorizontal: 30,
							borderRadius: 30,
							marginTop: 15
						}}
						onPress={() => navigation.navigate('Home')}
					>
						<Text style={{ fontSize: 22, fontWeight: '700' }}>
							Upload Picture
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<View>
						<TextInput placeholder='Name' />
					</View>
					<View>
						<TextInput placeholder='Email' />
					</View>
					<View>
						<TextInput placeholder='Mobile number' />
					</View>
					<View>
						<TextInput placeholder='Alternate mobile number' />
					</View>
					<View>
						<TextInput placeholder='FSSAI Certificate' />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
