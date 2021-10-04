import React from 'react';
import {
	View,
	Text,
	Image,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

export default function Products() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					width: '100%',
					height: 110,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Image
					style={{ width: '100%', height: '100%', position: 'absolute' }}
					source={require('../../../assets/Products/products_top.png')}
				/>
				<Image
					source={require('../../../assets/Signup/avatar.png')}
					style={{ position: 'absolute', top: '30%', width: 150, height: 150 }}
				/>
			</View>
			<View style={{ alignItems: 'center', width: '100%', marginTop: 80 }}>
				<Text style={{ fontSize: 40, fontWeight: '700' }}>My Products</Text>
				<View
					style={{
						backgroundColor: '#5D5FEF',
						width: 130,
						height: 3,
						marginTop: 4
					}}
				></View>
				<Text style={{ marginTop: 20, fontSize: 18 }}>
					Looks like you’re just starting out!
				</Text>
			</View>
			<TouchableOpacity
				style={{
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 30
				}}
			>
				<Image
					source={require('../../../assets/Products/plus.png')}
					style={{ width: 100, height: 100 }}
				/>
			</TouchableOpacity>
			<View
				style={{
					width: '100%',
					position: 'absolute',
					bottom: 0,
					alignItems: 'center'
				}}
			>
				<View
					style={{
						padding: 8,
						backgroundColor: '#E6E6E6',
						borderRadius: 10,
						position: 'absolute',
						top: 10
					}}
				>
					<Text>Click '+' add products</Text>
				</View>
				<Image source={require('../../../assets/Products/sad_box.png')} />
			</View>
		</SafeAreaView>
	);
}
