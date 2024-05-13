/**
 * Exercise_7
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

import Alert from "@elementor/ui/Alert";
import AlertTitle from "@elementor/ui/AlertTitle";
import AlertAction from "@elementor/ui/AlertAction";

export default function Solution_7() {
	return (
		<Alert
			action={ <AlertAction variant="contained">Action 1</AlertAction> }
			secondaryAction={ <AlertAction>Action 2</AlertAction> }
			onClose={ () => alert('close') }
			severity="info"
			color="warning"
		>
				<AlertTitle>Title</AlertTitle>
				This is the alert description.
		</Alert>
	);
}
