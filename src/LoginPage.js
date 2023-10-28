import React, {useCallback, useState, useEffect, useContext} from 'react';
import {Center, Heading, Input, Button} from "@chakra-ui/react";
import {GameStateContext} from "./GameStateContext";
import {useParams, Navigate} from 'react-router';

export function LoginPage() {
    const {enterCurrentPlayer, updateRoomCode} = useContext(GameStateContext);
    const { roomCode } = useParams();
    const [showRedirect, setShowRedirect] = useState(false);

    // Set room code when logging in
    useEffect(() => {
        updateRoomCode(roomCode);
    }, [roomCode]);

    const [username, setUsername] = useState('');
    const handleUsernameChanged = useCallback((event) => {
        setUsername(event.target.value);
    }, []);

    // Use last name if you have one
    useEffect(() => {
        // eslint-disable-next-line no-undef
        const lastUsername = localStorage.getItem("lastUsername");
        if (lastUsername) setUsername(lastUsername);
    }, []);

    // name
    const handleRoomEntered = useCallback(async () => {
        if (username && username.length > 0) {
            // eslint-disable-next-line no-undef
            localStorage.setItem("lastUsername", username);
            await enterCurrentPlayer(username);

            setShowRedirect(true);
        }
    }, [username]);

    return (
        <Center flexDirection="column">
            <Heading>Please enter your name</Heading>
            <Input value={username} onChange={handleUsernameChanged} placeholder='TheWaterGuy' maxLength="20" maxWidth="30em" />
            <Button onClick={handleRoomEntered}>Enter</Button>

            {showRedirect ? <Navigate to={`/room/${roomCode}/main`} /> : null}
        </Center>

    );
}