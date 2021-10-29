import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Items from './Pages/Home/Items/Items';
import Details from './Pages/Details/Details';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/items'>
            <Items></Items>
          </Route>
          <PrivateRoute path='/details'>
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path='/aboutUs'>
            <AboutUs></AboutUs>
          </PrivateRoute>
          <Route exact path='/login'>
              <Login></Login>
            </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
