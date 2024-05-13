import { useState } from 'react';

import EuiBox from '@elementor/ui/Box';
import EuiLink from '@elementor/ui/Link';
import EuiStack from '@elementor/ui/Stack';
import EuiTypography from '@elementor/ui/Typography';
import EuiAppBar from '@elementor/ui/AppBar';
import EuiToolbar from '@elementor/ui/Toolbar';
import EuiButton from '@elementor/ui/Button';
import EuiContainer from '@elementor/ui/Container';
import EuiFab from '@elementor/ui/Fab';

import Exercise_1 from './exercises/Exercise-1';
import Exercise_2 from './exercises/Exercise-2';
import Exercise_3 from './exercises/Exercise-3';
import Exercise_4 from './exercises/Exercise-4';
import Exercise_5 from './exercises/Exercise-5';
import Exercise_6 from './exercises/Exercise-6';
import Exercise_7 from './exercises/Exercise-7';
import Exercise_8 from './exercises/Exercise-8';
import Exercise_9 from './exercises/Exercise-9';
import Exercise_10 from './exercises/Exercise-10';

import Exercise_1_Solution from './solutions/Exercise-1-Solution';
import Exercise_2_Solution from './solutions/Exercise-2-Solution';
import Exercise_3_Solution from './solutions/Exercise-3-Solution';
import Exercise_4_Solution from './solutions/Exercise-4-Solution';
import Exercise_5_Solution from './solutions/Exercise-5-Solution';
import Exercise_6_Solution from './solutions/Exercise-6-Solution';
import Exercise_7_Solution from './solutions/Exercise-7-Solution';
import Exercise_8_Solution from './solutions/Exercise-8-Solution';
import Exercise_9_Solution from './solutions/Exercise-9-Solution';
import Exercise_10_Solution from './solutions/Exercise-10-Solution';

const exercises = {
  Exercise_1,
  Exercise_2,
  Exercise_3,
  Exercise_4,
  Exercise_5,
  Exercise_6,
  Exercise_7,
  Exercise_8,
  Exercise_9,
  Exercise_10,
};

const solutions = {
  Exercise_1_Solution,
  Exercise_2_Solution,
  Exercise_3_Solution,
  Exercise_4_Solution,
  Exercise_5_Solution,
  Exercise_6_Solution,
  Exercise_7_Solution,
  Exercise_8_Solution,
  Exercise_9_Solution,
  Exercise_10_Solution,
};

function App() {
  const [ components, setComponents ] = useState<typeof exercises | typeof solutions>( solutions );

  return (
    <>
      <EuiAppBar position="sticky">
        <EuiToolbar sx={ { justifyContent: 'space-between' } }>
          <EuiTypography variant="h6">Elementor UI Challenges</EuiTypography>

          <EuiStack direction="row" gap={ 1 }>
            <EuiButton size="small" variant="outlined" onClick={ () => setComponents( exercises ) }>Exercises</EuiButton>
            <EuiButton size="small" variant="outlined" onClick={ () => setComponents( solutions ) }>Solutions</EuiButton>
          </EuiStack>
        </EuiToolbar>
      </EuiAppBar>

      <EuiContainer>
        <EuiStack gap={ 1 } mt={ 2 }>
          {
            Object.entries( components ).map( ( ( [ name ] ) => (
              <EuiStack key={ name + '_link' }>
                <EuiBox>
                  <EuiLink href={ '#' + name }>{ name }</EuiLink>
                </EuiBox>
              </EuiStack>
            ) ) )
          }
        </EuiStack>

        <EuiStack pt={ 4 } py={ 5 } pb="1000px" mt="1000px" gap="1000px">
          {
            Object.entries( components ).map( ( ( [ name, Component ] ) => (
              <EuiStack gap={ 2 } id={ name } key={ name }>
                <EuiTypography variant="h3">{ name }</EuiTypography>
      
                <EuiBox>
                  <Component key={name}  />
                </EuiBox>
              </EuiStack>
            ) ) )
          }
        </EuiStack>
      </EuiContainer>

      <EuiFab
        size="small"
        color="primary"
        onClick={ () => window.scrollTo({ top: 0 }) }
        sx={ { right: 20, bottom: 20, position: 'fixed' } }
      >
        ↑
      </EuiFab>
    </>
  )
}

export default App;
