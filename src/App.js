import './App.css';
import Navi from './Layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import EmployerList from './Pages/EmployerList';

function App() {
  return (
    <div className='App'>
      <Navi />
      <Container className='main'>
        <EmployerList/>
      </Container>
    </div>
  );
}

export default App;
