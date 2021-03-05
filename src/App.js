import "./App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Lottie from "react-lottie";
import weights from "./lottie/23421-work-out-weight-lifting.json";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { receive, sendbackres, sendbackbmi } from "./function";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cardStyle: {
    maxWidth: 750,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    // margin: 20,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [result, setresult] = useState();
  const [bmi, setbmi] = useState();

  const matches = useMediaQuery("(max-width:600px)");

  function senddata() {
    const data = {
      weight: weight,
      height: height,
    };
    receive(data);

    setTimeout(() => {
      const resx = sendbackres();
      const bmix = sendbackbmi();
      setresult(resx);
      setbmi(bmix);
    }, 500);
  }
  // console.log("result :", result);

  const weightss = {
    loop: true,
    autoplay: true,
    animationData: weights,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#2081FC" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BMI CALCULATOR
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} md={6} style={{ marginTop: 130 }}>
          <div>
            <Lottie
              options={weightss}
              height={matches ? 300 : 600}
              width={matches ? 300 : 600}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{}}>
          <div>
            <Card
              className={classes.cardStyle}
              style={{
                marginTop: 70,
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Container>
                  <TextField
                    style={{ margin: 20 }}
                    id="outlined-basic"
                    label="Weight (Kilograms)"
                    value={weight}
                    variant="outlined"
                    type="number"
                    onChange={(e) => setweight(e.target.value)}
                  />
                </Container>
                <Container>
                  <TextField
                    style={{ margin: 20, marginBottom: 30 }}
                    id="outlined-basic"
                    label="Height (Centimeters)"
                    value={height}
                    variant="outlined"
                    type="number"
                    onChange={(e) => setheight(e.target.value)}
                  />
                </Container>

                <Button
                  style={{ marginTop: 500 }}
                  // variant="contained"
                  // component="span"
                  style={{ backgroundColor: "#5BA3FF" }}
                  onClick={senddata}
                  disabled={!height || !weight}
                >
                  Calculate
                </Button>
                {result !== undefined && result !== null ? (
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      style={{ textAlign: "center", margin: 10 }}
                    >
                      Your BMI : {bmi}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{ textAlign: "center", margin: 10 }}
                    >
                      You are : {result}
                    </Typography>
                  </div>
                ) : (
                  <h1 style={{ textAlign: "center" }}>-----</h1>
                )}
              </CardContent>
            </Card>
          </div>
          <Card className={classes.cardStyle} style={{ marginTop: 30 }}>
            <CardContent>
              <img
                src="https://bodivisthailand.com/wp-content/uploads/2019/05/bmi-categories_med.jpeg"
                style={{ width: matches ? 300 : 580 }}
              />
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={6} style={{}}>
          <div>
            <Card className={classes.cardStyle}>
              <CardContent>
                <Container style={{ margin: 50 }}>
                  <TextField
                    id="outlined-basic"
                    label="Weight (Kilograms)"
                    value={weight}
                    variant="outlined"
                    type="number"
                    onChange={(e) => setweight(e.target.value)}
                  />
                </Container>
                <Container style={{ margin: 50 }}>
                  <TextField
                    id="outlined-basic"
                    label="Height (Centimeters)"
                    value={height}
                    variant="outlined"
                    type="number"
                    onChange={(e) => setheight(e.target.value)}
                  />
                </Container>

                <Button
                  variant="contained"
                  component="span"
                  className={classes.cardStyle}
                  style={{ backgroundColor: "#5BA3FF" }}
                  onClick={senddata}
                  disabled={!height || !weight}
                >
                  Calculate
                </Button>
                {result !== undefined && result !== null ? (
                  <div>
                    <Typography
                      variant="h5"
                      style={{ textAlign: "center", margin: 10 }}
                    >
                      Your BMI : {bmi}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{ textAlign: "center", margin: 10 }}
                    >
                      You are : {result}
                    </Typography>
                  </div>
                ) : (
                  <h1 className={classes.cardStyle}>-----</h1>
                )}
              </CardContent>
            </Card>
          </div>
          <Card className={classes.cardStyle} style={{ marginTop: 30 }}>
            <CardContent>
              <img
                src="https://bodivisthailand.com/wp-content/uploads/2019/05/bmi-categories_med.jpeg"
                style={{ width: matches ? 300 : 580 }}
              />
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
}
