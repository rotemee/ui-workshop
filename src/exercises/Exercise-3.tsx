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

import { ExerciseImage } from "../shared/ExerciseImage";

import Paper from '@elementor/ui/Paper';
import Stack from '@elementor/ui/Stack';

export default function Exercise_3() {
    return (
        <>
            <ExerciseImage src="/exercises/Exercise_3.png" />
            <Stack direction="row" gap={ 3 }>
                <Paper>
                    No shadow
                </Paper>

                <Paper>
                    Always dark
                </Paper>

                <Paper>
                    No border-radius
                </Paper>
            </Stack>
        </>
    );
}