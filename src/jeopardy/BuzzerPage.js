import React, {useContext} from 'react';
import { Button } from '@chakra-ui/react'
import {MqttBuzzerContext} from '../mqttBuzzerContext'

export function BuzzerPage() {
    const {buzzerEvents, pushBuzzer} = useContext(MqttBuzzerContext);

    return (
        <>
            <Button onClick={pushBuzzer}>Click me</Button>
            <div>
                {buzzerEvents != null ? buzzerEvents.map(be => (
                    <p key={be.timestamp}>{be.text + (new Date(be.timestamp)).toISOString()}</p>
                )) : null}
            </div>
        </>
    );
}