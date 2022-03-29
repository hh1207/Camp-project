import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ParticipantList from './pages/ParticipantsList';


function App() {
  return (
  <BrowserRouter>

  <Route exact path={["/"]}>
       <Homepage></Homepage>
    </Route>

  <Route exact path ={["/SubmitForm"]}>
    <FormPage></FormPage>
    </Route>

    <Route exact path ={["/participants"]}>
   <ParticipantList></ParticipantList>
    </Route>

   

  </BrowserRouter>
  
    

  );

}

export default App;
