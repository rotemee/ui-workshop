/**
 * Exercise_9
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
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

import { useState } from 'react';
import Accordion from '@elementor/ui/Accordion';
import AccordionSummary from '@elementor/ui/AccordionSummary';
import AccordionDetails from '@elementor/ui/AccordionDetails';
import Typography from '@elementor/ui/Typography';

export default function Solution_9() {
    const [ expanded, setExpanded ] = useState( 0 );

	return (
		<div>
			<Accordion expanded={ expanded === 0 } onChange={ () => setExpanded( 0 ) }>
				<AccordionSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion expanded={ expanded === 1 } onChange={ () => setExpanded( 1 ) }>
				<AccordionSummary
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion expanded={ expanded === 2 } onChange={ () => setExpanded( 2 ) }>
				<AccordionSummary
					aria-controls="panel3a-content"
					id="panel3a-header"
				>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
