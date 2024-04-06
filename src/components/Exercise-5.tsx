/**
 * 
 * Exercise 5:
 * 
 * Create a Card component with the following requirements:
 * 
 * - Max width: 300px
 * - No shadow
 * - With a border
 * 
 * - Header:
 *  - on the left:
 *   - Title
 *   - Sub Header
 * - on the right:
 *   - Clickable button with an icon: <DotsVerticalIcon /> - clicking on this button should open a menu:
 *   - Menu with 3 items: Item 1, Item 2, Item 3
 * 
 * - Separation line
 * 
 * - Content:
 *   - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
 * 
 * - Separation line
 * 
 * - Actions:
 *  - on the left:
 *   - Button 1: Primary, outlined, small
 *   - Button 2: Secondary, outlined, small
 *  - on the right:
 *   - Clickable button with an icon: : <ChevronDownIcon /> - Hovering the button should show a tooltip with the text: "More options".
 * 
 */

import Card from '@elementor/ui/Card';
import { ChevronDownIcon, DotsVerticalIcon } from '@elementor/icons';

export default function Exercise_5() {
	return (
		<Card>
            Your solution here.
        </Card>
	);
}
