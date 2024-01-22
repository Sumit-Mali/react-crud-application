import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

const Create = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [checkBox, setCheckBox] = useState(false);

	let navigate = useNavigate();
	const postData = () => {
		axios
			.post(`https://65ad37aeadbd5aa31be06040.mockapi.io/crud/crudData`, {
				firstName,
				lastName,
				checkBox,
			})
			.then(() => {
				navigate('/read');
			});
	};

	return (
		<div>
			<Form className="create-form">
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder="First Name"
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="I agree to the Terms and Conditions"
						onChange={(e) => setCheckBox(!checkBox)}
					/>
				</Form.Field>
				<Button type="submit" onClick={postData}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Create;
