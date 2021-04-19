import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../css/App.css';
import Login from './Login';
import Header from './Header';
import Menu from './Menu';
import About from './About';
import ContactUS from './ContactUs';
import FAQ from './FAQ';
import Registration from "./Registration";
import Userdashboard from "./Userdashboard";

function App() {
  return (
    <div className="App">
     <Header />
     <Router>
       <Switch>
         <Route exact path="/">
           <Login />
         </Route>
         <Route path="/registration">
           <Registration />
         </Route>
         <Route path="/aboutus">
          <About />
         </Route>
         <Route path="/menu">
          <Menu />
         </Route>
         <Route path="/faq">
            <FAQ />
         </Route>
         <Route path="/contactus">
            <ContactUS />
         </Route>
         <Route path="/userdashboard">
          <Userdashboard />
         </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
