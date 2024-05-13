/**
 * Exercise_5
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

import Stack from "@elementor/ui/Stack";
import Card from "@elementor/ui/Card";
import CardHeader from "@elementor/ui/CardHeader";
import CardContent from "@elementor/ui/CardContent";
import CardActions from "@elementor/ui/CardActions";
import Button from "@elementor/ui/Button";
import Divider from "@elementor/ui/Divider";
import IconButton from "@elementor/ui/IconButton";
import Menu from "@elementor/ui/Menu";
import MenuItem from "@elementor/ui/MenuItem";
import Tooltip from "@elementor/ui/Tooltip";
import { usePopupState, bindTrigger, bindMenu } from "@elementor/ui/usePopupState";
import { ChevronDownIcon, DotsVerticalIcon } from "@elementor/icons";

export default function Solution_5() {
	const popupState = usePopupState({
		variant: "popover",
		popupId: "demoMenu",
	});

	return (
		<Stack direction="row" gap={4}>
			<Card variant="outlined" sx={{ maxWidth: 300 }}>
				<CardHeader
					title="Title"
					subheader="Sub Header"
					action={
						<>
							<IconButton {...bindTrigger(popupState)}>
								<DotsVerticalIcon />
							</IconButton>

							<Menu
								{...bindMenu(popupState)}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
							>
								<MenuItem onClick={popupState.close}>
									Item 1
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									Item 2
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									Item 3
								</MenuItem>
							</Menu>
						</>
					}
				>
					Header
				</CardHeader>
				<Divider />
				<CardContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer posuere erat a ante. lorem ipsum dolor sit amet,
					consectetur adipiscing elit.
					Integer posuere erat a ante.
				</CardContent>
				<Divider />
				<CardActions disableSpacing>
					<Button variant="outlined" color="primary" size="small">
						Button 1
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						size="small"
						sx={{ ml: 1 }}
					>
						Button 2
					</Button>

					<Tooltip title="More options">
						<IconButton sx={{ ml: "auto" }}>
							<ChevronDownIcon />
						</IconButton>
					</Tooltip>
				</CardActions>
			</Card>
		</Stack>
	);
}
