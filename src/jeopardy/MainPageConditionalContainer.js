import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../GameStateContext";
import {Navigate, useParams} from 'react-router';
import {MdSettings} from "react-icons/md";
import {Icon} from "@chakra-ui/react";

// Container responsible for initializing everything before rendering children
function MainPageContainer({children}) {
    const {players, boards, updatePlayers, updateBoards} = useContext(GameStateContext);

    // Initial call
    useEffect(() => {
        updatePlayers();
        updateBoards();
    }, []);

    if (!players || !boards) return <Icon as={MdSettings} />;

    return children;
}

export function MainPageConditionalContainer({children}) {
    // Room code is set by login page, which must be navigated to first.
    const {roomCode : urlRoomCode} = useParams();
    const {roomCode} = useContext(GameStateContext);

    if (roomCode) {
        return (
            <MainPageContainer>
                {children}
            </MainPageContainer>
        );
    } else {
        return <Navigate to={`/room/${urlRoomCode}`}/>;
    }
}