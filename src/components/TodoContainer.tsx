import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import EditIcon from "@mui/icons-material/Edit";
import UseStore from "../store";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateTodo from "./UpdateTodo";
import Button from "@mui/material/Button";
import UpdateDialog from "./UpdateTodo";
import { ButtonGroup, Paper } from "@mui/material";

export default function CheckboxList() {
  const [checked, setChecked] = React.useState<number[]>([]);
  const [state, setState] = React.useState<{
    editable: boolean;
    editId: null | number;
  }>({ editable: false, editId: null });
  const store = UseStore();
  const handleToggle = (value: number) => () => {
    //todo bu ne yav iki kez func açmış, bunlar hep israf???
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
    <>
      {state.editId !== null && (
        <UpdateDialog
          editable={state.editable}
          editId={state.editId}
          handleClose={() => {
            setState((f) => ({ ...f, editable: false }));

            setTimeout(() => {
              setState((f) => ({ ...f, editId: null }));
            }, 300);
          }}
        />
      )}
      <Paper
        sx={{
          width: 600,
          mx: "auto",
          mt: 5,
          mb: 3,
          py: 1,
        }}
      >
        <List sx={{ width: "100%" }}>
          {store.todos.map((element) => {
            return (
              <ListItem
                key={element.id}
                sx={{
                  px: 2,
                }}
                secondaryAction={
                  <ButtonGroup edge="end" aria-label="comments">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setState({
                          editable: true,
                          editId: element.id,
                        });
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        store.deleteTodo(element.id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                }
                disablePadding
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // onChange={store.checkTodo(element.id)}
                    onChange={() => {
                      store.checkTodo(element.id);
                    }}
                    checked={element.done}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemButton button onClick={handleToggle(element)}>
                  <ListItemText
                    id={String(element.id)}
                    primary={element.text}
                    primaryTypographyProps={{ sx: { maxWidth: "70%" } }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </>
  );
}
