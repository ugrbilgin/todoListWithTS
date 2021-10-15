import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/TodoContainer";
import TodoForm from "./components/CreateTodo";
import UseStore from "./store";
import { ThemeProvider } from "@mui/system";
import { createTheme, CssBaseline } from "@mui/material";
const theme = createTheme({ palette: { mode: "dark" } });

function App() {
  const store = UseStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoForm />
      <Todos />
    </ThemeProvider>
  );
}

export default App;
