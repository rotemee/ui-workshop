/**
 * Exercise_3
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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

import Paper from '@elementor/ui/Paper';
import Stack from '@elementor/ui/Stack';
import Box from '@elementor/ui/Box';
import Typography from '@elementor/ui/Typography';
import { ThemeProvider } from '@elementor/ui/styles';

export default function Solution_3() {
    return (
        <Stack gap={ 6 }>
            <Box>
                <Typography>All items with padding: 40px</Typography>
            </Box>

            { /* Solution start */ }
            <Stack direction="row" gap={ 3 }>
                <Paper elevation={ 0 } sx={ { p: 5 } }>
                    No shadow
                </Paper>

                <ThemeProvider colorScheme="dark">
                    <Paper sx={ { p: 5 } }>
                        Always dark
                    </Paper>
                </ThemeProvider>

                <Paper square sx={ { p: 5 } }>
                    No border-radius
                </Paper>
            </Stack>
            { /* Solution end */ }
        </Stack>
    );
}