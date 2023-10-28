import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import theme from "./chakraStyling";
import {ChakraProvider} from "@chakra-ui/react";
import {GameStateContextProvider} from "./GameStateContext";
import {MqttContextProvider} from "./mqttContext";
import {BrowserRouter} from "react-router-dom";

Amplify.configure(awsExports);

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <BrowserRouter basename="/app">
              <GameStateContextProvider>
                  <MqttContextProvider>
                      <App />
                  </MqttContextProvider>
              </GameStateContextProvider>
          </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();