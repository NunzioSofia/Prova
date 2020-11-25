import './AppMobile.css';
import './App.css';
import Home from './components/Home.js'
import Notifiche from './components/Notifiche.js'
import Prenotazioni from './components/Prenotazioni.js'
import User from './components/User.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
     <div>
     <Router >
      <div id="mainHeader" >
        <nav>
          <ul className="router">
            <li>
              <Link exact='true' to="/"><img src="https://www.iconhot.com/icon/png/devine/256/home-13.png" width="25" height="25"></img></Link>
            </li>
            <li>
              <Link to="/prenotazioni"><img src="https://free-icon-rainbow.com/i/icon_04726/icon_047260_256.png" width="25" height="25"></img></Link>
            </li>
            <li>
              <Link to="/notifiche"><img src="https://img.icons8.com/wired/2x/appointment-reminders.png" width="25" height="25"></img></Link>
            </li>
            <li>
              <Link to="/user"><img src="https://www.pivotalretailmarketing.co.uk/wp-content/uploads/2019/03/png-user-icon-account-friend-human-man-member-person-profile-user-256.png" width="25" height="25"></img></Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/prenotazioni">
            <Prenotazioni />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/notifiche">
            <Notifiche />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div> 
  );
}

export default App;
