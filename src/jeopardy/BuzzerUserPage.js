import React, {useState, useContext, useEffect} from 'react';
import {Icon, Box, IconButton} from '@chakra-ui/react'
import {MqttContext} from '../mqttContext'
import {DateTime} from "luxon";
import {BuzzerLog} from "./BuzzerLog";
import {MdCircleNotifications} from "react-icons/md";

export function BuzzerUserPage() {
    const [buzzerDisabled, setBuzzerDisabled] = useState(false);
    const [buzzerLock, setBuzzerLock] = useState(true);
    const [localBuzzerLockStart, setLocalBuzzerLockStart] = useState(null);
    const {pushBuzzer, buzzerLockId, buzzerLockStart} = useContext(MqttContext);

    // Disable buzzer lock if buzzer lock context items have changed
    useEffect(() => {
        if (buzzerLockId) {
            setBuzzerLock(false);
        }
        setBuzzerDisabled(false);
    }, [buzzerLockId]);

    useEffect(() => {
        if (buzzerLockStart) {
            setLocalBuzzerLockStart(buzzerLockStart);
        }
    }, [buzzerLockStart]);

    const handleBuzzerPushed = () => {
        let time = -1;
        if (localBuzzerLockStart != null) {
            time = DateTime.now().diff(localBuzzerLockStart).as('milliseconds');
        }
        setBuzzerLock(true);
        setBuzzerDisabled(true)
        pushBuzzer(time);
    };

    return (
        <Box display="flex" flex="0" flexDirection="column" w="100%" h="100%">
            <IconButton
                isRound={true}
                width='4.5em'
                height='4.5em'
                fontSize='5em'
                colorScheme={buzzerLock ? 'gray': undefined}
                icon={<Icon as={MdCircleNotifications} />}
                onClick={handleBuzzerPushed}
                isDisabled={buzzerDisabled}
                aria-label="Download"
             />
            <BuzzerLog />
        </Box>
    );
}