/**
 * Exercise_4
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

import Card from '@elementor/ui/Card';
import CardHeader from '@elementor/ui/CardHeader';
import CardContent from '@elementor/ui/CardContent';
import CardActions from '@elementor/ui/CardActions';
import Button from '@elementor/ui/Button';
import Divider from '@elementor/ui/Divider';
import IconButton from '@elementor/ui/IconButton';
import { ChevronDownIcon, DotsVerticalIcon } from '@elementor/icons';

export default function Solution_4() {
    return (
        <Card variant="outlined" sx={ { maxWidth: 300 } }>
            <CardHeader
                title="Title"
                subheader="Sub Header"
                action={
                    <IconButton>
                        <DotsVerticalIcon />
                    </IconButton>
                }
            />
            <Divider />
            <CardContent>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Integer posuere erat a ante.
                lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Integer posuere erat a ante.
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
                <Button variant='outlined' color="primary" size="small">Button 1</Button>
                <Button variant='outlined' color="secondary" size="small" sx={ { ml: 1 } }>Button 2</Button>

                <IconButton sx={ { ml: 'auto' } }>
                    <ChevronDownIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}