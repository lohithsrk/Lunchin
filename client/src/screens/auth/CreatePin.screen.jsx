import React, { useState } from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	View,
	Image,
	TouchableOpacity,
	useWindowDimensions
} from 'react-native';

import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default function CreatePin() {
	const windowHeight = useWindowDimensions().height;
	const [code, setCode] = useState('');
	const [confirm, setConfirm] = useState('');
	return (
		<SafeAreaView
			style={{
				marginTop: StatusBar.currentHeight,
				flex: 1,
				minHeight: Math.round(windowHeight)
			}}
		>
			<Text
				style={{
					marginTop: 40,
					fontSize: 42,
					fontWeight: '700',
					textAlign: 'center'
				}}
			>
				Create New Pin
			</Text>
			<View
				style={{
					position: 'relative',
					width: '68%',
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
			>
				<Text
					style={{
						fontSize: 0,
						borderBottomWidth: 5,
						borderBottomColor: '#FF5B28'
					}}
				></Text>
			</View>
			<View
				style={{
					position: 'relative',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 80
				}}
			>
				<Text
					style={{
						marginBottom: 20,
						fontSize: 20,
						fontWeight: '100',
						textAlign: 'center'
					}}
				>
					New pin
				</Text>
				<SmoothPinCodeInput
					placeholder={
						<View
							style={{
								width: 10,
								height: 10,
								borderRadius: 25,
								opacity: 0.3,
								backgroundColor: '#FF4A0A'
							}}
						></View>
					}
					mask={
						<View
							style={{
								width: 10,
								height: 10,
								borderRadius: 25,
								backgroundColor: '#FF180A'
							}}
						></View>
					}
					maskDelay={1000}
					password={true}
					cellStyle={null}
					// codeLength={4}
					cellStyleFocused={null}
					autoFocus={true}
					value={code}
					onTextChange={(code) => setCode(code)}
				/>
				<Text
					style={{
						marginTop: 40,
						marginBottom: 20,
						fontSize: 20,
						fontWeight: '100',
						textAlign: 'center'
					}}
				>
					Confirm pin
				</Text>
				<SmoothPinCodeInput
					placeholder={
						<View
							style={{
								width: 10,
								height: 10,
								borderRadius: 25,
								opacity: 0.3,
								backgroundColor: '#FF4A0A'
							}}
						></View>
					}
					mask={
						<View
							style={{
								width: 10,
								height: 10,
								borderRadius: 25,
								backgroundColor: '#FF180A'
							}}
						></View>
					}
					maskDelay={1000}
					password={true}
					cellStyle={null}
					cellStyleFocused={null}
					value={confirm}
					onTextChange={(code) => setConfirm(code)}
				/>
			</View>
			<View style={{ position: 'relative', bottom: 0, flex: 1 }}>
				<Image
					source={require('../../../assets/pin/Rectangle.png')}
					style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 1 }}
				/>
				<Image
					source={require('../../../assets/pin/bro.png')}
					style={{ position: 'absolute', bottom: 0, zIndex: 1 }}
				/>
				<TouchableOpacity
					activeOpacity={0.5}
					style={{
						position: 'absolute',
						backgroundColor: 'white',
						alignItems: 'center',
						justifyContent: 'center',
						paddingVertical: 8,
						paddingHorizontal: 20,
						marginBottom: 15,
						marginRight: 15,
						borderRadius: 10,
						shadowColor: 'black',
						shadowOpacity: 0.8,
						elevation: 3,
						bottom: 0,
						right: 0,
						zIndex: 2,
						width: '25%'
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: '100' }}>Next</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
