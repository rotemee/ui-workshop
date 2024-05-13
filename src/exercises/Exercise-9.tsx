/**
 * Exercise 9:
 * 
 * Create 3 accordion panels with the following behavior:
 * - Only one panel can be expanded at a time.
 * 
 * - Title: Accordion 1
 * - Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
 * 
 * - Title: Accordion 2
 * - Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
 * 
 * - Title: Accordion 3
 * - Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
 * 
 */

import { ExerciseImage } from "../shared/ExerciseImage";

import { useState } from 'react';
import Accordion, { AccordionProps } from '@elementor/ui/Accordion';
import AccordionSummary from '@elementor/ui/AccordionSummary';
import AccordionDetails from '@elementor/ui/AccordionDetails';
import Typography from '@elementor/ui/Typography';

export default function Exercise_9() {
	return (
		<>
			<ExerciseImage src="/exercises/Exercise_9.png" />
            Your solution here.
        </>
	);
}
