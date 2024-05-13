/**
 * 
 * Exercise 3:
 * 
 * Paper 1:
 *  - No shadow
 * 
 * Paper 2:
 * - Should be locked in dark-mode (any child component should also be locked in dark-mode)
 * 
 * Paper 3:
 * - No border-radius
 * 
 */

import Paper from '@elementor/ui/Paper';
import Stack from '@elementor/ui/Stack';

export default function Exercise_3() {
    return (
        <Stack direction="row" gap={ 3 }>
            <Paper sx={ { p: 5 } }>
                No shadow
            </Paper>

            <Paper sx={ { p: 5 } }>
                Always in dark mode
            </Paper>

            <Paper sx={ { p: 5 } }>
                No border-radius
            </Paper>
        </Stack>
    );
}