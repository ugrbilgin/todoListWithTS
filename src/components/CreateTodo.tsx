import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UseStore from "../store";
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip'
export default function BasicTextFields() {
  const store = UseStore();
  const [temp, setTemp] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => {
          setTemp(e.target.value);
        }}
      />
      <Tooltip title="Add ToDo" arrow>
        <Button
          variant="contained"
          style={{ width: "30px" }}
          onClick={() => {
            store.addTodo(temp);
            console.log(store.todos);
          }}
        >
          Add
        </Button>
      </Tooltip>
    </Box>
  );
}
