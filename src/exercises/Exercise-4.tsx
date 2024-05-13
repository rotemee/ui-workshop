/**
 * 
 * Exercise 4:
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
 *   - Clickable button with an icon: <DotsVerticalIcon />
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
 *   - Clickable button with an icon: : <ChevronDownIcon />
 * 
 */

import { ExerciseImage } from "../shared/ExerciseImage";

import Card from '@elementor/ui/Card';
import CardHeader from '@elementor/ui/CardHeader';
import CardContent from '@elementor/ui/CardContent';
import CardActions from '@elementor/ui/CardActions';
import Button from '@elementor/ui/Button';
import Divider from '@elementor/ui/Divider';
import IconButton from '@elementor/ui/IconButton';
import { ChevronDownIcon, DotsVerticalIcon } from '@elementor/icons';

export default function Exercise_4() {
    return (
        <>
            <ExerciseImage src="/exercises/Exercise_4.png" />
            <Card>
                Your solution here.
            </Card>
        </>
    );
}