import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	TextInput,
	StyleSheet,
	Alert,
	ActivityIndicator
} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { createUser } from '../axios/auth.axios';

const verifyPermissions = async () => {
	const result = await Location.requestForegroundPermissionsAsync();
	if (result.status != 'granted') {
		Alert.alert(
			'Insufficient permissions',
			'You need to grant location permissions to use this app.',
			[{ text: 'Okay' }]
		);
		return false;
	}
	return true;
};

export default function SignUp({ navigation }) {
	const [location, setLocation] = useState({});
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	// const [email, setEmail] = useState('')
	// const [email, setEmail] = useState('')
	const fetchLocation = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) navigation.navigate('WelcomeSignup');

		try {
			const fetchedLocation = await Location.getCurrentPositionAsync({
				timeout: 5000
			});
			setLocation({
				lat: fetchedLocation.coords.latitude,
				lng: fetchedLocation.coords.longitude
			});
		} catch (err) {
			Alert.alert(
				'Could not fetch the location',
				'Please try again later or pick a location in the map.',
				[{ text: 'Okay' }]
			);
		}
	};
	useEffect(() => {
		fetchLocation();
	}, []);

	const handleSubmit = () => {
		navigation.navigate('WelcomeSignup');
		createUser(email, phone, username, password);
	};

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
					<TextInput
						style={styles.input}
						value={username}
						onChangeText={(value) => setUsername(value)}
						placeholder='Name'
					/>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(value) => setEmail(value)}
						placeholder='Email'
					/>
					<TextInput
						style={styles.input}
						value={phone}
						onChangeText={(value) => setPhone(value)}
						placeholder='Mobile number'
					/>
					<TextInput
						style={styles.input}
						placeholder='Alternate mobile number'
					/>
					<TextInput style={styles.input} placeholder='FSSAI Certificate' />
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={(value) => setPassword(value)}
						placeholder='Password'
					/>
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
				<MapView
					region={{
						latitude: location.lat,
						longitude: location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
					style={{ width: '100%', height: 300 }}
				>
					
				</MapView>
				<View
					style={{
						width: '100%',
						height: 100,
						backgroundColor: '#5D5FEF',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row'
					}}
				>
					<TouchableOpacity
						activeOpacity={0.5}
						style={{
							backgroundColor: '#FFE8B2',
							alignItems: 'center',
							justifyContent: 'center',
							paddingVertical: 10,
							paddingHorizontal: 40,
							borderRadius: 30
						}}
						onPress={handleSubmit}
					>
						<Text style={{ fontSize: 22, fontWeight: '700' }}>Proceed</Text>
					</TouchableOpacity>
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
