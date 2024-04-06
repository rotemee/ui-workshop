/**
 * Exercise 6:
 * 
 * Create a Dialog component with the following requirements:
 * 
 * - Dialog size:
 * - width: 600px
 * 
 * - Header:
 *  - on the left:
 *   - Title
 *   - Chip: color: promotion, label: "Upgrade", size: small
 * - on the right:
 *   - Clickable button with an icon: <SearchIcon /> + size: small
 *  - Clickable button with an icon: <HelpIcon /> + size: small
 * 
 * - Separation line
 * 
 * - Content:
 *   - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
 * 
 * - Separation line
 * 
 * - Actions:
 *  - on the right:
 *   - Button: outlined + color: secondary + size: small + label: Cancel
 *   - Button: contained + label: Ok
 * 
 */

import Dialog from '@elementor/ui/Dialog';
import { SearchIcon, HelpIcon } from '@elementor/icons';

export default function Exercise_6() {
    return (
        <Dialog open={ false }>
            Your solution here.
        </Dialog>
    );
}