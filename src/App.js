import './App.css';
import Navi from './Layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from './Layouts/Dashboard';

function App() {
  return (
    <div className='App'>
      <Navi />
      <Container className='main'>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
