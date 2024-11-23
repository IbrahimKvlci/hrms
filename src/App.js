import logo from './logo.svg';
import './App.css';
import Navi from './Layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import JobList from './Pages/JobList';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className='App'>
      <Navi />
      <Container className='main'>
        <JobList/>
      </Container>
    </div>
  );
}

export default App;
