import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import mytheme from "./theme.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={mytheme}>
      <ColorModeScript initialColorMode={mytheme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
