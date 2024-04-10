/**
 * Exercise 8:
 * 
 * Create a group of buttons that can only have one selected at a time, with the following requirements:
 * 
 * - Left button: Left
 * - Center button: Center
 * - Right button: Right
 * 
 */

import { useState } from 'react';
import ToggleButton from '@elementor/ui/ToggleButton';
import ToggleButtonGroup from "@elementor/ui/ToggleButtonGroup";

export default function Exercise_8() {
	const [ alignment, setAlignment ] = useState( '' );

	return (
		<>
			Your solution here.
		</>
	);
}
