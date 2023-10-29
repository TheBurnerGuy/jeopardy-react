import React, {useContext, useCallback} from 'react';
import {Box, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {MqttContext} from "../mqttContext";
import {BoardPage} from "./BoardPage";
import {QuestionPage} from "./QuestionPage";
import {GameStateContext} from "../GameStateContext";
import {PlayerInfo} from "./PlayerInfo";

export function MainPage() {
    const {isAdmin} = useContext(GameStateContext);
    const {mainPageTabIndex, changeMainPageTabIndex} = useContext(MqttContext);

    return (
        <Box display="flex" flex="1" w="100%" h="100%" padding="2rem 2rem">
            <Tabs
                index={mainPageTabIndex}
                width="100%"
                onChange={useCallback(index => changeMainPageTabIndex(index, isAdmin), [isAdmin])}
            >
                <TabList>
                    <Tab isDisabled={!isAdmin}>Board 1</Tab>
                    <Tab isDisabled={!isAdmin}>Board 2</Tab>
                    <Tab isDisabled={!isAdmin}>Question</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <BoardPage number={1} />
                    </TabPanel>
                    <TabPanel>
                        <BoardPage number={2} />
                    </TabPanel>
                    <TabPanel>
                        <QuestionPage />
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <PlayerInfo />
        </Box>
    );
}