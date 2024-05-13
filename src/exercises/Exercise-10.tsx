/**
 * Exercise 10:
 * 
 * Create a form with the following requirements:
 * 
 * - Form width: 500px
 * - Form padding: 16px
 * - Elements spacing: 16px
 * 
 * - Elements:
 * - Label: Username
 * - Text input
 * - Label: Password
 * - Password input
 * - Gender select
 * 
 * - Submit button: primary, contained
 * 
 */

import { ExerciseImage } from "../shared/ExerciseImage";

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

export default function Exercise_8() {
	const [ gender, setGender ] = useState('');

	return (
		<>
			<ExerciseImage src="/exercises/Exercise_10.png" />
            Your solution here.
        </>
	);
}
