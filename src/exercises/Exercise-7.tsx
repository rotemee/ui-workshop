/**
 * Exercise 7:
 * 
 * Create an Alert component with the following requirements:
 * 
 * - Severity: info
 * - Color: warning
 * 
 * - Title: Title
 * 
 * - Description:
 * - This is the alert description.
 * 
 * - Actions:
 * - Action 1: contained
 * - Action 2: outlined
 */

import { ExerciseImage } from "../shared/ExerciseImage";

import Alert from "@elementor/ui/Alert";
import AlertTitle from "@elementor/ui/AlertTitle";
import AlertAction from "@elementor/ui/AlertAction";

export default function Exercise_7() {
	return (
		<>
			<ExerciseImage src="/exercises/Exercise_7.png" />
			<Alert>
				Your solution here.
			</Alert>
		</>
	);
}
