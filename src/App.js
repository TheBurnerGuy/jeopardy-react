import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {MainPage} from "./jeopardy/MainPage";
import {Routes, Route} from "react-router";
import {LoginPage} from "./LoginPage";
import {MainPageConditionalContainer} from "./jeopardy/MainPageConditionalContainer";
import {BuzzerPage} from "./jeopardy/BuzzerPage";

function App() {
    return (
        <Box width="100%" height="100%">
            <Routes path="/">
                <Route
                    path="room/:roomCode/main"
                    element={
                        <MainPageConditionalContainer>
                            <Flex direction="row">
                                <MainPage />
                                <BuzzerPage />
                            </Flex>
                        </MainPageConditionalContainer>
                    }
                />
                <Route
                    path="room/:roomCode"
                    element={
                        <LoginPage />
                    }
                />
            </Routes>

        </Box>
    );
}

export default App;
