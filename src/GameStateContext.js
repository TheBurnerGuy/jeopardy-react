import React, {useState} from 'react';

const GameStateContext = React.createContext({
    isAdmin : false,
    currentPlayerId : null,
    currentPlayerName : null,
    currentBoard : null,
    currentQuestion : null,
    showingBoard : null,
    showingQuestion : null,
});

function GameStateContextProvider({children}) {
    const [currentPlayerName, setCurrentPlayerName] = useState('Anonymous');

    return (
        <GameStateContext.Provider value={{currentPlayerName}}>
            {children}
        </GameStateContext.Provider>
    );
}

export {GameStateContext, GameStateContextProvider};