import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../css/App.css';
import Login from './Login';
import Logout from './Logout';
import Header from './Header';
import UserHeader from './userHeader';
import Menu from './Menu';
import About from './About';
import ContactUS from './ContactUs';
import FAQ from './FAQ';
import Cart from './Cart';
import AddDishes from './AddDishes';
import Registration from "./Registration";
import Userdashboard from "./Userdashboard";



function App() {


  return (
    <Router>
    <div className="App">
     
       <Switch>
         <Route exact path="/">
          <Header />
           <Login />
         </Route>

         <Route path="/registration">
          <Header />
           <Registration />
         </Route>

         <Route path="/aboutus">
          <UserHeader />
          <About />
         </Route>

         <Route path="/menu">
          <UserHeader />
          <Menu />
         </Route>

         <Route path="/faq">
          <UserHeader />
            <FAQ />
         </Route>

         <Route path="/contactus">
            <UserHeader />
            <ContactUS />
         </Route>

         <Route path="/logout">
            <Logout />
         </Route>

         <Route path="/addDish">
            <UserHeader />
            <AddDishes />
         </Route>

         <Route path="/cart">
            <UserHeader />
            <Cart />
         </Route>

         <Route path="/userdashboard">
          <UserHeader />
          <Userdashboard />
         </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
