/**
 * Exercise_1
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

import Box from '@elementor/ui/Box';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import Container from '@elementor/ui/Container';

export default function Solution_1() {
    return (
        <Stack gap={ 10 }>
            <Box>
                <Typography>max-width: 600px</Typography>
                <Typography>background-color: primary.main</Typography>
                <Typography>padding: 16px</Typography>
            </Box>

            { /* Solution start: */ }
            <Container maxWidth="sm" sx={ { backgroundColor: 'primary.main', p: 2 } }>
                This is my content.
            </Container>
            { /* Solution end: */ }
        </Stack>
    );
}