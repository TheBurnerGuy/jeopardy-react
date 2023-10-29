import React, {useContext, useState} from 'react';
import {Box, Icon, Divider, HStack, Text} from "@chakra-ui/react";
import {MdCircleNotifications, MdLockOpen} from "react-icons/md";
import {BuzzerLog} from "./BuzzerLog";
import {DateTime} from "luxon";
import {MqttContext} from "../mqttContext";
import {BuzzerAdminButton} from "./BuzzerAdminButton";

export function BuzzerAdminPage() {
    const {unlockBuzzer, pushBuzzer, buzzerLockStart} = useContext(MqttContext);
    const [lastUnlockTimestamp, setLastUnlockTimestamp] = useState(null);

    const handleBuzzerUnlocked = () => {
        unlockBuzzer();
        setLastUnlockTimestamp(DateTime.now().toISOTime());
    }
    const handleBuzzerPushed = () => {
        let time = -1;
        if (buzzerLockStart != null) {
            time = DateTime.now().diff(buzzerLockStart).as('milliseconds');
        }
        pushBuzzer(time);
    };

    return (
        <Box display="flex" flex="0" flexDirection="column" w="100%" h="100%">
            <HStack>
                <Text>Buzzer</Text>
                <BuzzerAdminButton
                    icon={<Icon as={MdCircleNotifications} />}
                    onClick={handleBuzzerPushed}
                />
            </HStack>
            <HStack>
                <Text>Unlock lock</Text>
                <BuzzerAdminButton
                    icon={<Icon as={MdLockOpen} />}
                    onClick={handleBuzzerUnlocked}
                />
                <Text>{lastUnlockTimestamp != null ? lastUnlockTimestamp : ''}</Text>
            </HStack>

            <Box minWidth="360px" />
            <Divider />
            <BuzzerLog />
        </Box>
    );
}