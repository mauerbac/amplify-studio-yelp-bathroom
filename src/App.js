import './App.css';
import {
  TestFooter,
  BathroomCardCollection,
  HeroGeorge,
  NavBar,
} from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { View, Card, Grid, Divider, Heading } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <Card columnStart="5" columnEnd="-1">
        <NavBar width="100%" marginBottom="30px" />
        <HeroGeorge
          // width="100%"
          margin="0 auto"
          overrides={{ image: { objectFit: 'contain' } }}
        />
        {/* <Divider
            orientation="horizontal" /> */}
        <Heading margin="30px" level={2}>
          Recently Rated Bathrooms
        </Heading>

        <BathroomCardCollection gap="50px" margin="0 auto" />
      </Card>
      <TestFooter width="100%" />
    </div>
  );
}

//export default withAuthenticator(App);
export default App;
