import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Viewdept from "./Components/Viewdept";
import 'antd/dist/antd.css';
import SelectDoctor from "./Components/SelectDoctor";
import updateProfile from "./Components/updateProfile";
import About from "./Components/About";
import Phistory from "./Components/Phistory";
import Logout from "./Components/logout";
import D_profile from "./Components/D_profile";
import ViewPatients from "./Components/ViewPatients";
import exercise from "./Components/exercise";
import ExMainPage from "./Components/ExMainPage";
import Payment from "./Components/Payment"
import Admin from "./Components/Admin";
import Lab from "./Components/Lab";
import Stretching from "./Components/Stretching";
import Areobic from "./Components/Areobic";
import comments from "./Components/Comment";
import Pharmacy from "./Components/Pharmcy";


//import Logout from './Components/logout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Viewdept" component={Viewdept} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/signuppage" component={SignupPage} />
        <Route exact path="/SelectDoctor" component={SelectDoctor} />
        <Route exact path="/updateProfile" component={updateProfile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Phistory" component={Phistory} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/dprofile" component={D_profile} />
        <Route exact path="/viewpatients" component={ViewPatients} />
        <Route exact path="/exercise" component={exercise} />
        <Route exact path="/ExMainPage" component={ExMainPage} />
        <Route exact path= "/Payment" component={Payment}/>
        <Route exact path="/Stretching" component={Stretching} />
        <Route exact path="/Areobic" component={Areobic} />
        <Route exact path= "/comments" component={comments}/>
        <Route exact path= "/Admin" component={Admin}/>
        <Route exact path= "/Lab" component={Lab}/>
        <Route exact path= "/Pharmacy" component={Pharmacy}/>
        
      
    

        

        {/* // <Route exact path="/logout" component={Logout}/> */}
      </Switch>
    </Router>
  );
}
export default App;
