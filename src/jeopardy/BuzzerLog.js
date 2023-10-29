import React, {useContext} from 'react';
import {Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {MqttContext} from "../mqttContext";

export function BuzzerLog() {
    const {buzzerEvents} = useContext(MqttContext);

    const oldestBuzzerEvent = buzzerEvents && buzzerEvents.length > 0 && buzzerEvents.filter(be => be.time >= 0).sort((a, b) => a.time >= b.time ? 1 : -1)[0];

    return (
        <VStack paddingTop="1em">
            {buzzerEvents != null ? buzzerEvents.map(be => (
                <HStack align="center" key={be.name + be.time}>
                    <Heading size="sm">{be.name}</Heading>
                    {be.time >= 0 ? (
                        <>
                            <Text>{((be.time - oldestBuzzerEvent.time) / 1000).toFixed(3)}s</Text>
                            <Text>({(be.time / 1000).toFixed(3)}s)</Text>
                        </>
                    ) : (
                        <>
                            <Text>Pressed early</Text>
                        </>
                    )}
                </HStack>
            )) : null}
        </VStack>
    );
}