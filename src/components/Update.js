import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

const Update = () => {
	const [ID, setID] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [checkBox, setCheckBox] = useState(false);

	useEffect(() => {
		setID(localStorage.getItem('ID'));
		setFirstName(localStorage.getItem('First Name'));
		setLastName(localStorage.getItem('Last Name'));
		setCheckBox(localStorage.getItem('Checkbox Value'));
	}, []);

	let navigate = useNavigate();
	const updateAPIData = () => {
		axios
			.put(
				`https://65ad37aeadbd5aa31be06040.mockapi.io/crud/crudData/${ID}`,
				{
					firstName,
					lastName,
					checkBox,
				}
			)
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
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="I agree to the Terms and Conditions"
						checked={checkBox}
						onChange={(e) => setCheckBox(!checkBox)}
					/>
				</Form.Field>
				<Button type="submit" onClick={updateAPIData}>
					Update
				</Button>
			</Form>
		</div>
	);
};

export default Update;
