const show = false;

/**
 * Exercise_6
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
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

import Dialog from '@elementor/ui/Dialog';
import DialogTitle from '@elementor/ui/DialogTitle';
import DialogHeader from '@elementor/ui/DialogHeader';
import DialogHeaderGroup from '@elementor/ui/DialogHeaderGroup';
import DialogContent from '@elementor/ui/DialogContent';
import DialogActions from '@elementor/ui/DialogActions';
import Button from '@elementor/ui/Button';
import IconButton from '@elementor/ui/IconButton';
import Chip from '@elementor/ui/Chip';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import { SearchIcon, HelpIcon } from '@elementor/icons';

export default function Solution_6() {
    return (
        <Dialog open={ show } fullWidth maxWidth="sm">
            <DialogHeader>
                <DialogHeaderGroup>
                    <DialogTitle>Title</DialogTitle>

                    <Chip color="promotion" label="Upgrade" size="small" />
                </DialogHeaderGroup>

                <DialogHeaderGroup gutterLeftAuto>
                    <IconButton size="small">
                        <SearchIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small">
                        <HelpIcon fontSize="small" />
                    </IconButton>
                </DialogHeaderGroup>
            </DialogHeader>

            <DialogContent dividers>
                <Stack gap={ 2 }>
                    <Stack gap={ 2 }>
                        <Typography variant="subtitle1">
                            Dialog size:
                        </Typography>
                        <Typography variant="body2">
                            width: 600px
                        </Typography>
                    </Stack>

                    <Stack gap={ 2 }>
                        <Typography variant="subtitle1">
                            Top right icon buttons:
                        </Typography>
                        <Typography variant="body2">
                            clickable icon size: small (SearchIcon)
                        </Typography>
                        <Typography variant="body2">
                            clickable icon size: small (HelpIcon)
                        </Typography>
                    </Stack>
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button color="secondary" variant="outlined"> Cancel</Button>
                <Button variant="contained">Ok</Button>
            </DialogActions>
        </Dialog>
    );
}