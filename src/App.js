import logo from './logo.svg';
import './App.css';
import Navi from './Layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import JobList from './Pages/JobList';
import { Container } from 'semantic-ui-react';
import CandidateList from './Pages/CandidateList';

function App() {
  return (
    <div className='App'>
      <Navi />
      <Container className='main'>
        <CandidateList/>
      </Container>
    </div>
  );
}

export default App;
