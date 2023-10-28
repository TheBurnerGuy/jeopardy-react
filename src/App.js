import React from 'react';
// import './App.css';
import {BuzzerUserPage} from "./jeopardy/BuzzerUserPage";
import {MqttContextProvider} from "./mqttContext";
import {GameStateContextProvider} from "./GameStateContext";
import {Box, Flex, ChakraProvider} from "@chakra-ui/react";
import theme from './chakraStyling';
import {BoardPage} from "./jeopardy/BoardPage";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <GameStateContextProvider>
                <MqttContextProvider>
                    <Box width="100%" height="100%">
                        <Flex direction="row">
                            <BoardPage />
                            <BuzzerUserPage />
                        </Flex>
                    </Box>
                </MqttContextProvider>
            </GameStateContextProvider>
        </ChakraProvider>
    );
}

export default App;
