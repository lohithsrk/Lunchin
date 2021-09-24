import React, { useState } from 'react';
// import { SignUpStyles } from './Sign-Up.styles';
import { Text, View,Button } from 'react-native';

import Input from '../../components/input/input.component';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');

const handleSubmit =(e)=>{

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
			<Input placeholder='Enter Username' value={username} setValue={setUsername} />
			<Input placeholder='Enter Phone number' value={phoneNumber} setValue={setPhoneNumber} />
			<Input placeholder='Enter Password' value={password} setValue={setPassword} />
            <Button title='Continue' onPress={handleSubmit} />
		</View>
	);
}
