import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  mainContent: {
    position: "absolute",
    top: "64px",
    bottom: "64px",
    left: 0,
    right: 0,
    overflow: "auto",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default
  },
  text: {
    maxWidth: 600,
    textAlign: "center"
  }
}));

export default function MainContent() {
  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <div style={{ margin: "0 auto", maxWidth: 1200 }}>
        <Typography variant="h4" gutterBottom>
          Single SPA em Server-Side Rendering
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Single SPA é uma estrutura de microfrontends que permite que você desenvolva aplicativos usando várias estruturas de front-end, como React, Vue.js e Angular, e as combine em um único aplicativo. Server-side rendering (SSR) é uma técnica que permite que os aplicativos carreguem mais rapidamente, enviando ao navegador uma versão pré-renderizada do aplicativo.
        </Typography>
      </div>
    </div>
  );
}