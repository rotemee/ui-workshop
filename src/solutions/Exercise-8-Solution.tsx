/**
 * Exercise_8
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
import ToggleButton from '@elementor/ui/ToggleButton';
import ToggleButtonGroup from "@elementor/ui/ToggleButtonGroup";

export default function Solution_8() {
	const [ alignment, setAlignment ] = useState( 'left' );

	return (
		<ToggleButtonGroup exclusive value={ alignment } onChange={ ( _, selected ) => setAlignment( selected ) }>
			<ToggleButton value="left">Left</ToggleButton>
			<ToggleButton value="center">Center</ToggleButton>
			<ToggleButton value="right">Right</ToggleButton>
		</ToggleButtonGroup>
	);
}
