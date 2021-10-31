import React,{useState} from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	Dimensions,
	TextInput,
	Image,
	TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const NumberInput = ({ text }) => {

	const [count, setCount] = useState(0)


	const incrementCount = () => ;

	const decrementCount = () => count--;

	return (
		<View>
			<Text style={{ textAlign: 'center' }}>{text}</Text>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity onPress={incrementCount}>
				<AntDesign name='pluscircle' size={24} color='#5D5FEF' />
				</TouchableOpacity>
				<Text>{count}</Text>
				<TouchableOpacity onPress={decrementCount}>
				<AntDesign name='minuscircle' size={24} color='#5D5FEF' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default function FillProductDetails() {
	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
			<View
				style={{
					width: Dimensions.get('window').width - StatusBar.currentHeight * 2,
					height: 70,
					backgroundColor: '#5D5FEF',
					margin: StatusBar.currentHeight,
					borderRadius: 20,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>
					Fill Product Details
				</Text>
			</View>
			<View
				style={{
					width: Dimensions.get('window').width - StatusBar.currentHeight * 3,
					marginHorizontal: StatusBar.currentHeight * 1.5,
					marginTop: 0,
					marginBottom: 20
				}}
			>
				<Text style={{ fontSize: 18, marginBottom: 3 }}>Product Name</Text>
				<TextInput
					style={{
						width: '100%',
						height: 70,
						borderColor: '#c2c2c2',
						borderRadius: 10,
						borderWidth: 1
					}}
				/>
			</View>
			<View
				style={{
					width: '100%',
					height: 200,
					backgroundColor: 'rgba(255,177,141,.43)',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<TouchableOpacity>
					<View
						style={{
							width: Dimensions.get('window').width / 2.5,
							height: Dimensions.get('window').width / 2.5,
							backgroundColor: 'white',
							borderRadius: 10,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image
							source={require('../../../assets/Products/img_upload.png')}
						/>
					</View>
				</TouchableOpacity>
			</View>
			<View style={{ width: '100%' }}>
				<NumberInput text='Price per quantity' />
				<NumberInput text='Quantity available' />
			</View>
		</SafeAreaView>
	);
}
