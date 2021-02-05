import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundColor: "#D6D8D9"
    },
  });

export default function Footer() {
    const classes = useStyles();
    return (
      <>
        <BottomNavigation className={classes.root} >
            <a href="https://www.linkedin.com/in/anja-khan/" rel="noreferrer"  target="_blank">
              <BottomNavigationAction icon={<LinkedIn />} />
            </a>
            <a href="https://github.com/anjakhan" rel="noreferrer"  target="_blank">
              <BottomNavigationAction icon={<GitHubIcon />} />
            </a>
            <a href="https://twitter.com/anja_khan90" rel="noreferrer"  target="_blank">
              <BottomNavigationAction icon={<TwitterIcon />} />
            </a>
            <a href="mailto:anjakhan@gmx.de" rel="noreferrer"  target="_blank">
              <BottomNavigationAction icon={<EmailIcon />} />
            </a>
            <a href="https://anjakhan.netlify.app/" rel="noreferrer"  target="_blank">
              <BottomNavigationAction icon={<FolderSharedIcon />} />
            </a>
        </BottomNavigation>
      </>
    );
}