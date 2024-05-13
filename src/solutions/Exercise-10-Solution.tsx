/**
 * Exercise_10
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { useState } from 'react';
import Box from "@elementor/ui/Box";
import FormControl from "@elementor/ui/FormControl";
import Select from "@elementor/ui/Select";
import MenuItem from "@elementor/ui/MenuItem";
import InputLabel from "@elementor/ui/InputLabel";
import FormLabel from "@elementor/ui/FormLabel";
import TextField from "@elementor/ui/TextField";
import Button from "@elementor/ui/Button";
import Stack from "@elementor/ui/Stack";
import Typography from "@elementor/ui/Typography";
import { styled } from "@elementor/ui/styles";

const FormRow = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
	gap: theme.spacing(2),
}));

export default function Solution_10() {
	const [ gender, setGender ] = useState('');

	return (
		<Stack gap={ 3 }>
			<Box>
				<Typography>Form width: 500px</Typography>
				<Typography>Form padding: 16px</Typography>
				<Typography>Elements spacing: 16px</Typography>
			</Box>

			<Box
				component="form"
				display="flex"
				flexDirection="column"
				gap={ 2 }
				p={ 2 }
				maxWidth={ 500 }
				onSubmit={ () => console.log( 'Submitted' )}
			>
				<FormRow>
					<FormLabel htmlFor="username">Username:</FormLabel>

					<TextField id="username" name="username" fullWidth />
				</FormRow>

				<FormRow>
					<FormLabel htmlFor="password">Password:</FormLabel>

					<TextField id="password" name="password" fullWidth type="password" />
				</FormRow>

				<FormControl fullWidth>
					<InputLabel id="demo-label">Gender</InputLabel>
					<Select
						labelId="gender-label"
						label="Gender"
						variant="outlined"
						value={ gender }
						onChange={ ( event ) => setGender( event.target.value as string )}
					>
						<MenuItem value="male">Male</MenuItem>
						<MenuItem value="female">Female</MenuItem>
					</Select>
				</FormControl>

				<Button fullWidth variant="contained" type="submit">Submit</Button>
			</Box>
		</Stack>
	);
}
