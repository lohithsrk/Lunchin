import React, { useState } from 'react';
// import { SignUpStyles } from './Sign-Up.styles';
import { Text, View, Button } from 'react-native';
import { createUser } from '../../axios/auth.axios';

import Input from '../../components/input/input.component';

export default function SignUp() {
	const [email, setEmail] = useState('srklohith05@gmail.com');
	const [username, setUsername] = useState('lohith');
	const [phone, setPhone] = useState('7810052277');
	const [password, setPassword] = useState('lohithsrk');

	const handleSubmit = async () => {
			await createUser(email, phone, username, password).then((res) =>
				console.log(res)
			);
	}

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Input placeholder='Enter Email' value={email} setValue={setEmail} />
			<Input
				placeholder='Enter Username'
				value={username}
				setValue={setUsername}
			/>
			<Input
				placeholder='Enter Phone number'
				value={phone}
				setValue={setPhone}
			/>
			<Input
				placeholder='Enter Password'
				value={password}
				setValue={setPassword}
			/>

			<Button title='continue' onPress={handleSubmit} />
		</View>
	);
}
