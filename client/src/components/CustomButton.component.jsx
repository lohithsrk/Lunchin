import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function CustomButton() {
    return (
        <TouchableOpacity
					activeOpacity={0.5}
					style={{
						backgroundColor: '#EFED5D',
						alignItems: 'center',
						justifyContent: 'center',
						paddingVertical: 10,
						paddingHorizontal: 20,
						borderRadius: 30,
						marginTop: 30,
						width: '50%'
					}}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={{ fontSize: 24, fontWeight: '700' }}>LUNCHIN'</Text>
				</TouchableOpacity>
    )
}
