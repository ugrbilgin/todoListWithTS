import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UseStore from "../store";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { InputBase, Paper, Stack } from "@mui/material";
import faker from "faker/locale/tr";

export default function BasicTextFields() {
  const store = UseStore();
  const [temp, setTemp] = useState(faker.lorem.lines(1));
  return (
    <Paper sx={{ width: 420, mx: "auto", mt: 5, mb: 3, py: 1, px: 2 }}>
      <Stack flexDirection="row">
        <InputBase
          placeholder="Outlined"
          value={temp}
          multiline
          onChange={(e) => {
            setTemp(e.target.value);
          }}
          sx={{ flex: 1, mr: 2, py: 1.5, px: 2 }}
        />
        <Tooltip title="Add ToDo" arrow>
          <Button
            variant="contained"
            style={{ width: "30px" }}
            onClick={() => {
              store.addTodo(temp);
              setTemp(faker.lorem.lines(1));
            }}
          >
            Add
          </Button>
        </Tooltip>
      </Stack>
    </Paper>
  );
}
