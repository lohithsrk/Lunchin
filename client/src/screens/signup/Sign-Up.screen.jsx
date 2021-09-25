import React, { useState } from 'react';
// import { SignUpStyles } from './Sign-Up.styles';
import { Text, View, Button } from 'react-native';
import { createUser } from '../../axios/auth.axios';

import Input from '../../components/input/input.component';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		console.log('hi');
		createUser({ email, username, phone, password }).then((res) =>
			console.log(res)
		);
	};

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

			<Button title='continue' onPress={handleSubmit} />
		</View>
	);
}
