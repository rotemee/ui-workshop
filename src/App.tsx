import EuiBox from '@elementor/ui/Box';
import EuiLink from '@elementor/ui/Link';
import EuiStack from '@elementor/ui/Stack';
import EuiTypography from '@elementor/ui/Typography';

import Exercise_1 from './components/Exercise-1';
import Exercise_2 from './components/Exercise-2';
import Exercise_3 from './components/Exercise-3';
import Exercise_4 from './components/Exercise-4';
import Exercise_5 from './components/Exercise-5';
import Exercise_6 from './components/Exercise-6';
import Exercise_7 from './components/Exercise-7';
import Exercise_8 from './components/Exercise-8';
import Exercise_9 from './components/Exercise-9';
import Exercise_10 from './components/Exercise-10';

const component = {
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

function App() {
  return (
    <>
      <EuiStack gap={ 1 }>
        {
          Object.entries( component ).map( ( ( [ name ] ) => (
            <EuiStack key={ name + '_link' }>
              <EuiBox>
                <EuiLink href={ '#' + name }>{ name }</EuiLink>
              </EuiBox>
            </EuiStack>
          ) ) )
        }
      </EuiStack>
      <EuiStack gap={ '1000px' } sx={ { pt: 4, py: 4, pb: '1000px', mt: '1000px' } }>
        {
          Object.entries( component ).map( ( ( [ name, Component ] ) => (
            <EuiStack gap={ 2 } id={ name } key={ name }>
              <EuiTypography variant="h3">{ name }</EuiTypography>
    
              <EuiBox>
                <Component key={ name } />
              </EuiBox>
            </EuiStack>
          ) ) )
        }
      </EuiStack>

      <EuiBox
        width={ 20 }
        height={ 20 }
        bgcolor="text.tertiary"
        position="fixed"
        bottom={ 20 }
        right={ 20 }
        borderRadius="50%"
        textAlign="center"
        p={ 0.5 }
        sx={{ cursor: 'pointer' }}
        onClick={ () => window.scrollTo({ top: 0 }) }
      >
        ↑
      </EuiBox>
    </>
  )
}

export default App
