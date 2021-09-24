import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
	input: {
		height: 50,
		width: '100%',
		margin: 12,
		borderWidth: 1,
		padding: 10
	}
});

export default function Input({ value, setValue,placeholder }) {
	return <TextInput placeholder={placeholder} style={styles.input} onChangeText={(e) => setValue(e)} />;
}
