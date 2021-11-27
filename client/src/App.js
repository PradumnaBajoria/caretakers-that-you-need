import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogSign from "./components/loginpage/logsign";
import Home from "./components/home/home";
import { Link } from "react-router-dom";
import AccountPage from "./components/accountpage/accountpage";
import Users from "./components/users/Users";
import Logs from "./components/logs/Logs";
import Settings from "./components/settings/Settings";
import Children from "./components/children/Children";
import Bookings from "./components/bookings/Bookings";
import Landing from "./components/landing/Landing";
import NewsBoard from "./components/news/news-board/NewsBoard";


function App() {
  // const temp = () => {
  //   return (
  //     <>
  //       <div style={{ textAlign: "center" }}>
  //         <h1>This is the landing Page of Our Website </h1>
  //         <h1>Please Keep Patience</h1>
  //         <h1>Work Under Progress</h1>
  //         <h1>
  //           Meanwhile
  //           <Link to="/login">
  //             <span> Click here </span>
  //           </Link>
  //           to View our Main App
  //         </h1>
  //       </div>
  //     </>
  //   );
  // };

  const AccPage = () => {
    return (
      <>
        <Home>
          <AccountPage />
        </Home>
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <div>
    
          <Switch>
            <Route path="/" component={Landing} exact></Route>
            <Route path="/login" component={LogSign} exact></Route>
            <Route path="/home" component={Bookings} exact></Route>
            <Route path="/account" component={AccPage} exact></Route>
            <Route path="/users" component={Users} exact></Route>
            <Route path="/logs" component={Logs} exact></Route>
            <Route path="/settings" component={Settings} exact></Route>
            <Route path="/children" component={Children} exact></Route>
            <Route path="/bookings" component={Bookings} exact></Route>
            <Route path="/news" component={NewsBoard} exact></Route>

            {/* <Route path="/home" component={HomePage} exact></Route> */}
          </Switch>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
