/**
 * Exercise_2
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
import Button from '@elementor/ui/Button';
import Link from '@elementor/ui/Link';
import { AIIcon } from '@elementor/icons';

export default function Solution_2() {
    return (
        <Stack gap={ 10 }>
            <Stack gap={ 3 }>
                <Box>
                    <Typography>max-width: 900px</Typography>
                    <Typography>background-color: secondary.dark</Typography>
                    <Typography>padding: 16px</Typography>
                </Box>
                
                <Box>
                    <Typography>icon color: primary | icon size: 20px</Typography>
                    <Typography>text color: primary.main</Typography>
                    <Typography>button: primary + contained</Typography>
                    <Typography>link color: info.light</Typography>
                </Box>

                <Box>
                    <Typography>elements spacing: 24px</Typography>
                </Box>

                <Box>
                    <Typography>below 600px vertical layout, above 600px horizontal layout</Typography>
                </Box>
            </Stack>

            { /* Solution start: */ }
            <Container maxWidth="md" sx={ { backgroundColor: 'secondary.dark', p: 2 } }>
                <Stack direction={ { xs: 'column', sm: 'row' } } alignItems="center" justifyContent="center" gap={ 3 }>
                    <AIIcon color="primary" fontSize="small" />
                    <Typography color="primary.main">Plain Text</Typography>
                    <Button variant="contained">Button</Button>
                    <Link href="#" color="info.light">Link</Link>
                </Stack>
            </Container>
            { /* Solution end: */ }
        </Stack>
    );
}