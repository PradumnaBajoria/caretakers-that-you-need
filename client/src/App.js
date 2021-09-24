import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogSign from "./components/loginpage/logsign";
import Home from "./components/home/home";
import { Link } from "react-router-dom";
import AccountPage from "./components/accountpage/accountpage";

function App() {
  const temp = () => {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>This is the landing Page of Our Website </h1>
          <h1>Please Keep Patience</h1>
          <h1>Work Under Progress</h1>
          <h1>
            Meanwhile
            <Link to="/login">
              <span> Click here </span>
            </Link>
            to View our Main App
          </h1>
        </div>
      </>
    );
  };

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
            <Route path="/" component={temp} exact></Route>
            <Route path="/login" component={LogSign} exact></Route>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/account" component={AccPage} exact></Route>
            {/* <Route path="/home" component={HomePage} exact></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
