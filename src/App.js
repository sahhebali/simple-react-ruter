import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Aboute from './components/Aboute/Aboute';
import Friends from './components/Friends/Friends';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import FriendDetail from './components/FreindDetail/FriendDetail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>

       <Route exact path="/">
          <Home></Home>
       </Route>

       <Route path="/home">
        <Home></Home>
       </Route>

       <Route path="/Aboute">
          <Aboute></Aboute>
       </Route>

       <Route exact path="/Friends/">
          <Friends></Friends>
       </Route>
        <Route exact path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
       <Route path="*">
          <Notfound></Notfound>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
