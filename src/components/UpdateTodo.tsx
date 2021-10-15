import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import UseStore from "../store";
import faker from "faker/locale/tr";

export default function UpdateDialog({
  editable,
  editId,
  handleClose,
}: {
  editable: boolean;
  editId: null | number;
  handleClose: () => void;
}) {
  const [temp, setTemp] = useState(faker.lorem.lines(1));
  const store = UseStore();
  const todo = store.todos.find((a) => a.id === editId);
  if (todo === undefined) return <></>;
  const onSave = () => {
    if (temp.length < 5) return alert("daha fazla veri gir ibne");
    let newTodo = todo;
    newTodo.text = temp;
    setTemp(faker.lorem.lines(1));
    store.updateTodo(newTodo);
    handleClose();
    console.log(store.todos);
  };
  return (
    <div>
      <Dialog open={editable} onClose={handleClose}>
        <DialogTitle>Current TODO:</DialogTitle>
        <DialogContent>
          <DialogContentText>{todo.text}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Update"
            type="email"
            fullWidth
            variant="standard"
            value={temp}
            onChange={({ currentTarget: { value } }) => setTemp(value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
