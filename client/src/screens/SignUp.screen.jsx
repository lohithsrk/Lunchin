import React from 'react';
import {
	View,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	TextInput,
	StyleSheet
} from 'react-native';

export default function SignUp() {
	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
			<ScrollView showsVerticalScrollIndicator={false}>
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
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 20
					}}
				>
					<TextInput style={styles.input} placeholder='Name' />
					<TextInput style={styles.input} placeholder='Email' />
					<TextInput style={styles.input} placeholder='Mobile number' />
					<TextInput
						style={styles.input}
						placeholder='Alternate mobile number'
					/>
					<TextInput style={styles.input} placeholder='FSSAI Certificate' />
				</View>
				<View>
					<View
						style={{
							alignItems: 'center',
							width: '100%',
							marginVertical: 50,
							marginTop: 20
						}}
					>
						<Text style={{ fontSize: 40, fontWeight: '700' }}>
							Kitchen Location
						</Text>
						<View
							style={{
								backgroundColor: '#5D5FEF',
								width: 200,
								height: 3
							}}
						></View>
					</View>
					
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		width: '70%',
		marginVertical: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		borderColor: 'rgba(0,0,0,0.25)'
	}
});
