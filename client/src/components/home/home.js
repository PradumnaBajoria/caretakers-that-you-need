import { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { NavLink, Link, useHistory } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import GroupIcon from "@material-ui/icons/Group";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import BookIcon from "@material-ui/icons/Book";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import DnsIcon from "@material-ui/icons/Dns";
import List from "@material-ui/core/List";

import AccountPage from "../accountpage/accountpage";
import "./home.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "peachpuff",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home({ children }) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="navouter" style={{backgroundColor: "goldenrod"}}>
          <div className="navleft">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <div>
                <p
                  style={{
                    margin: "10px 0 0 0",
                    padding: "0",
                    fontWeight: "900",
                    fontSize: "25px",
                    letterSpacing: "3px",
                  }}
                >
                  CareTakers
                </p>
                <span
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "13px",
                    position: "relative",
                    fontWeight: "900",
                    bottom: "16px",
                    left: "29px",
                  }}
                >
                  That you need!
                </span>
              </div>
            </Typography>
          </div>
          <div className="navright">
            <NavLink
              exact
              className="navlink"
              activeClassName="selected"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="navlink"
              activeClassName="selected"
              exact
              to="/account"
            >
              Account
            </NavLink>
            <Link
              className="navlink"
              onClick={() => {
                axios
                  .get("/app/logout", {
                    withCredentials: true,
                  })
                  .then((res) => {
                    history.push("/login", { replace: true });
                    if (res.status !== 200) {
                      const error = new Error(res.error);
                      throw error;
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Logout
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <h2 style={{ textAlign: "center" }}>CARETAKERS</h2>
        </List>
        <Divider />
        <List>
          <Link exact to="users" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <p style={{ color: "black" }}>Users</p>
            </ListItem>
          </Link>
          <Link exact to="logs" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <DnsIcon />
              </ListItemIcon>
              <p style={{ color: "black" }}>Logs</p>
            </ListItem>
          </Link>
          {/* <Link exact to="settings" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <p style={{ color: "black" }}>Settings</p>
            </ListItem>
          </Link> */}
          <Link exact to="children" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <ChildCareIcon />
              </ListItemIcon>
              <p style={{ color: "black" }}>Children</p>
            </ListItem>
          </Link>
          <Link exact to="bookings" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <p style={{ color: "black" }}>Bookings</p>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}
