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
import Footer from './Footer';
import UserHeader from './UserHeader';
import AdminHeader from './AdminHeader';
import AdminDishes from './AdminDishes';
import Menu from './Menu';
import About from './About';
import ContactUS from './ContactUs';
import Cart from './Cart';
import AddDishes from './AddDishes';
import Registration from "./Registration";
import Userdashboard from "./Userdashboard";
import Confirm from "./Confirm";



function App() {


  return (
    <Router>
    <div className="App">
     
       <Switch>
         <Route exact path="/">
          <Header />
           <Login />
           <Footer/>
         </Route>
         <Route path="/myDishes">
          <AdminHeader/>
          <AdminDishes/>
          <Footer/>
         </Route>

         <Route path="/registration">
          <Header />
           <Registration />
           <Footer/>
         </Route>

         <Route path="/aboutus">
          <UserHeader />
          <About />
          <Footer/>
         </Route>

         <Route path="/menu">
          <UserHeader />
          <Menu />
          <Footer/>
         </Route>

         <Route path="/contactus">
            <UserHeader />
            <ContactUS />
            <Footer/>
         </Route>

         <Route path="/logout">
            <Logout />
         </Route>

         <Route path="/addDish">
            <AdminHeader />
            <AddDishes />
            <Footer/>
         </Route>

         <Route path="/cart">
            <UserHeader />
            <Cart />
            <Footer/>
         </Route>

         <Route path="/userdashboard">
            <UserHeader />
            <Userdashboard />
            <Footer/>
         </Route>
         <Route path="/confirmation">
            <UserHeader />
            <Confirm />
            <Footer/>
         </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
