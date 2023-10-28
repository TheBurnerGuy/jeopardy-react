import React, {useCallback, useState} from 'react';

const GameStateContext = React.createContext({
    isAdmin : false,
    roomCode : null,
    currentPlayerId : null,
    currentPlayerName : null,
    currentBoard : null,
    currentQuestion : null,
    showingBoard : null,
    showingQuestion : null,
    players : [],
    updateRoomCode: () => {},
    enterCurrentPlayer: () => {},
    updatePlayers : () => {},
});

function GameStateContextProvider({children}) {
    const [roomCode, setRoomCode] = useState();
    const [currentPlayerId, setCurrentPlayerId] = useState();
    const [currentPlayerName, setCurrentPlayerName] = useState('Anonymous');
    const [players, setPlayers] = useState([]);

    const updateRoomCode = useCallback(roomCode => setRoomCode(roomCode));

    const enterCurrentPlayer = useCallback((username) => {
        //TODO: Create new player or update current player fields via graphsql
        setCurrentPlayerId(-1);
        setCurrentPlayerName(username);

        return Promise.resolve();
    }, []);

    const updatePlayers = useCallback(() => {
        //TODO: Get players via graphsql
    }, []);

    return (
        <GameStateContext.Provider value={{roomCode, currentPlayerId, currentPlayerName, players, updateRoomCode,
            enterCurrentPlayer, updatePlayers}}
        >
            {children}
        </GameStateContext.Provider>
    );
}

export {GameStateContext, GameStateContextProvider};