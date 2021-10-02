import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import UseStore from "../store";
export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const store = UseStore();
  const handleToggle = (value: number) => () => { //todo bu ne yav iki kez func açmış, bunlar hep israf???
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {store.todos.map((element) => {
        return (
          <ListItem
            key={element.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(store.todos.indexOf(element))}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={element.done}
                  tabIndex={-1}
                  disableRipple
                  //inputProps={{ "aria-labelledby": labelId }} // TODO bunu silsem nolur?
                />
              </ListItemIcon>
              <ListItemText id={String(element.id)} primary={element.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
