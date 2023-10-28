import React, {useContext} from 'react';
import {GameStateContext} from "../GameStateContext";
import {Navigate, useParams} from 'react-router';

export function MainPageConditionalContainer({children}) {
    // Room code is set by login page, which must be navigated to first.
    const {roomCode : urlRoomCode} = useParams();
    const {roomCode} = useContext(GameStateContext);

    if (roomCode) {
        return children;
    } else {
        return <Navigate to={`/room/${urlRoomCode}`}/>;
    }
}