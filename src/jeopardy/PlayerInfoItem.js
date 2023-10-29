import React, {useState, useContext, useCallback} from 'react';
import {GameStateContext} from "../GameStateContext";
import {Editable, EditableInput, EditablePreview, Heading, HStack, Text} from "@chakra-ui/react";
import {MqttContext} from "../mqttContext";

/**
 * Renders something different depending on whether current user is admin
 */
export function PlayerInfoItem({player}) {
    const {isAdmin, updatePlayerFields} = useContext(GameStateContext);
    const {updateEveryonesPlayerState} = useContext(MqttContext);
    const [localPoints, setLocalPoints] = useState(player.points);
    const [localMesos, setLocalMesos] = useState(player.mesos);

    const handleAdminChangedPoints = useCallback(async () => {
        await updatePlayerFields(player.id, localPoints, localMesos);
        await updateEveryonesPlayerState();
    }, [player?.id, localPoints, localMesos]);

    const handleAdminChangedMesos = useCallback(async () => {
        await updatePlayerFields(player.id, localPoints, localMesos);
        await updateEveryonesPlayerState();
    }, [player?.id, localPoints, localMesos]);

    if (isAdmin) {
        return (
            <HStack>
                <Heading size="sm">{player.name}</Heading>
                <Editable value={localPoints} onChange={value => setLocalPoints(value)} onSubmit={handleAdminChangedPoints}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable value={localMesos} onChange={value => setLocalMesos(value)} onSubmit={handleAdminChangedMesos}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </HStack>
        );
    } else {
        return (
            <HStack>
                <Heading size="sm">{player.name}</Heading>
                <Text>{player.points + ' Points'}</Text>
                <Text>{player.mesos + ' Mesos'}</Text>
            </HStack>
        );
    }
}