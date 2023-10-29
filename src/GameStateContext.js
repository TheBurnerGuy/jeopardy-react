import React, {useCallback, useState} from 'react';
import {API} from "aws-amplify";
import {listBoards, listRooms, listUsers} from './graphql/queries';
import {createUser, updateBoard, updateUser} from './graphql/mutations';

const GameStateContext = React.createContext({
    isAdmin : false,
    roomId : null,
    roomCode : null,
    currentPlayerId : null,
    currentPlayerName : null,
    players : [],
    boards : {},
    updateRoomCode: () => {},
    enterCurrentPlayer: () => {},
    updatePlayers : () => [],
    updateBoards : () => {},
    updatePlayerFields : () => {},
    updateBoardFields : () => {},
});
//lol
function GameStateContextProvider({children}) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [roomId, setRoomId] = useState();
    const [roomCode, setRoomCode] = useState();
    const [currentPlayerId, setCurrentPlayerId] = useState();
    const [currentPlayerName, setCurrentPlayerName] = useState('Anonymous');
    const [players, setPlayers] = useState([]);
    const [boards, setBoards] = useState({});

    const updateRoomInfo = useCallback(async (roomCode) => {
        setRoomCode(roomCode)

        const results = await API.graphql({
            query: listRooms,
            filter: {
                code : { eq : roomCode},
            },
        })
        console.log(`fetched rooms, get first.`);
        console.log(results.data.listRooms.items[0].id);
        setRoomId(results.data.listRooms.items[0].id);
    });

    const enterCurrentPlayer = useCallback(async (username) => {
        // Check if user with this name already exists
        const existingUsersWithName = await API.graphql({
            query: listUsers,
        });

        // Existing user (check if admin)
        const existingUser = existingUsersWithName.data.listUsers.items.find(user => user.name === username);
        if (existingUser != null) {
            setIsAdmin(existingUser.admin);
        }
        // New user
        else {
           await API.graphql({
                query: createUser,
                variables: {
                    input: {
                        name: username,
                        admin : false,
                        points : 0,
                        mesos: 0,
                        userRoomId : roomId,
                    }
                }
            })
            setIsAdmin(false);
        }
        setCurrentPlayerName(username);
        setCurrentPlayerId(-1); //TODO: Should we figure out how to set this

        return Promise.resolve();
    }, [roomId]);

    const updatePlayers = useCallback(async () => {
        const result = await API.graphql({ query: listUsers, filter: {
                userRoomId : { eq : roomId},
            }, });
        console.log('players fetched')
        setPlayers(result.data.listUsers.items);
    }, [roomId]);

    const updateBoards = useCallback(async () => {
        const result = await API.graphql({ query: listBoards, filter: {
                userRoomId : { eq : roomId},
            } });
        console.log('boards fetched');

        // Turn results from array to list given what we know about the board query
        // We only have two boards
        const firstBoard = result.data.listBoards.items.find(board => board.number === 1);
        const secondBoard = result.data.listBoards.items.find(board => board.number === 2);
        const transformedBoards = {
            [1] : firstBoard,
            [2] : secondBoard,
        }

        setBoards(transformedBoards);
    }, [roomId])

    const updatePlayerFields = useCallback(async(id, points, mesos) => {
        const result = await API.graphql({ query: updateUser, variables : {input : {
            id, points : Number(points), mesos : Number(mesos),
            }}});
        return result;
    }, []);

    const updateBoardFields = useCallback(async(id, field, value) => {
        const result = await API.graphql({ query: updateBoard, variables : {input : {
                id,
                [field] : value
            }}});
        return result;
    }, []);

    return (
        <GameStateContext.Provider value={{isAdmin, roomCode, currentPlayerId, currentPlayerName, players, boards,
            updateRoomInfo, enterCurrentPlayer, updatePlayers, updateBoards, updatePlayerFields, updateBoardFields}}
        >
            {children}
        </GameStateContext.Provider>
    );
}

export {GameStateContext, GameStateContextProvider};