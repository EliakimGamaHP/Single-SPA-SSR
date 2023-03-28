import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(5),
    color: "white"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3)
  },
  link: {
    margin: theme.spacing(1)
  }
}));

export default function Footer({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <div>
          <Link href="#" className={classes.link}>
            Link 1
          </Link>
          <Link href="#" className={classes.link}>
            Link 2
          </Link>
          <Link href="#" className={classes.link}>
            Link 3
          </Link>
        </div>
        <Typography variant="body2" align="center">
          {'© '}{new Date().getFullYear()} {title}{'.'}
        </Typography>
      </div>
    </div>
  );
}