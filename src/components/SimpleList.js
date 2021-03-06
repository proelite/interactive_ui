import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/PersonOutline";
import FileIcon from "@material-ui/icons/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function UserItem({ user, onUserItemClick }) {
  return (
    <ListItem button onClick={() => onUserItemClick(user)}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={user} />
    </ListItem>
  );
}

function FileItem({ file, onFileItemClick }) {
  return (
    <ListItem button onClick={() => onFileItemClick(file)}>
      <ListItemIcon>
        <FileIcon />
      </ListItemIcon>
      <ListItemText primary={file} />
    </ListItem>
  );
}

export default function SimpleList({
  users,
  files,
  onUserItemClick,
  onFileItemClick
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Users">
        {users.map((user) => (
          <UserItem key={user} user={user} onUserItemClick={onUserItemClick} />
        ))}
      </List>
      <Divider />
      <List component="nav" aria-label="Files">
        {files.map((file) => (
          <FileItem key={file} file={file} onFileItemClick={onFileItemClick} />
        ))}
      </List>
    </div>
  );
}
