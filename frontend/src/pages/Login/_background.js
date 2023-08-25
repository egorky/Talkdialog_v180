import React, { useState, useContext } from "react";
// import { Link as RouterLink } from "react-router-dom";

import {
	CssBaseline,
	TextField,
	Container,
	InputAdornment,
	IconButton,
} from '@material-ui/core';


import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";

import Button from "@material-ui/core/Button";

// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import background from '../../assets/background_login.png';
import logo from "../../assets/logo.png";

// const Copyright = () => {
// 	return (
// 		<Typography variant="body2" color="textSecondary" align="center">
// 			{"Copyleft "}
// 			<Link color="inherit" href="https://github.com/canove">
// 				Canove
// 			</Link>{" "}
// 			{new Date().getFullYear()}
// 			{"."}
// 		</Typography>
// 	);
// };

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    containerWrapper: {
      display: "flex",
      justifyContent: "space-between",
      gap: theme.spacing(4),
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    mobileContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    },
    hideOnMobile: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    background: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      height: '100%',
      zIndex: -1,
    },
    loginContent: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
    },
    btn: {
      display: 'block',
      width: '100%',
      height: 50,
      borderRadius: 25,
      outline: 'none',
      border: 'none',
      backgroundColor: '#4c39b8',
      backgroundSize: '200%',
      fontSize: '1.2rem',
      color: '#fff',
      textTransform: 'uppercase',
      margin: '1rem 0',
      cursor: 'pointer',
      transition: '.5s',
    },
    logo: {
      maxWidth: 300,
      marginBottom: -20,
    }
}));

const Login = () => {
	const classes = useStyles();

	const [user, setUser] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);

	const { handleLogin } = useContext(AuthContext);

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		handleLogin(user);
	};

	return (
    <div style={{ display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.containerWrapper}>
          <Container component="div" maxWidth="xs" className={`${classes.mobileContainer} ${classes.hideOnMobile}`}>
            <img src={background} className={classes.background} alt={process.env.REACT_APP_TITLE} />
          </Container>
          <Container component="div" maxWidth="xs" className={classes.mobileContainer}>
          <div className={classes.loginContent}>
            <form style={{ display: "grid" }} noValidate onSubmit={handleSubmit} >
              <img className={classes.logo} src={logo} alt="logo" ></img>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={i18n.t("login.form.email")}
                  name="email"
                  value={user.email}
                  onChange={handleChangeInput}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={i18n.t("login.form.password")}
                  id="password"
                  value={user.password}
                  onChange={handleChangeInput}
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((e) => !e)}
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                  }}
                  />
                <input fullWidth variant="contained" type="submit" className={classes.btn} value={i18n.t("login.buttons.submit")} />
            </form>
          </div>
          </Container>
        </div>
      </Container>
    </div>
    );
};

export default Login;
