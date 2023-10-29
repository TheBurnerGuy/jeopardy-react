import React, {useState, useEffect, useCallback, useContext} from 'react';
import * as mqtt from 'mqtt/dist/mqtt.min'
import jeopardyConfig from "./jeopardyconfig.json";
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from "luxon";
import {GameStateContext} from "./GameStateContext";

const MqttContext = React.createContext({
    mqttClient: null,
    buzzerEvents: [],
    pushBuzzer: () => {},
    buzzerLockId : null,
    buzzerLockStart : null,
    unlockBuzzer: () => {},
    clearBuzzer: () => {},
    mainPageTabIndex: 0,
    changeMainPageTabIndex: () => {},
    updateEveryonesBoardState : () => {},
    updateEveryonesPlayerState : () => {},
    question : null,
    answer : null,
    publishQuestion : () => {},
    publishAnswer : () => {},
    resetQuestionData : () => {},
});

const buzzerTopic = 'buzzer';
const buzzerLockTopic = 'buzzer_lock';
const boardTabTopic = 'board_tab';
const updateEverythingTopic = "update_everything";
const questionAnswerTopic = 'qaTopic';

/**
 * Starts mqttClient.
 *
 * Due to Mqtt's terrible API, we store various state here as well instead of in GameStateContext.
 * This component is responsible for state that isn't vital and doesn't need to be saved into our database.
 */
function MqttContextProvider({children}) {
    const {currentPlayerId, currentPlayerName, updatePlayers, updateBoards} = useContext(GameStateContext);
    const [mqttClient, setMqttClient] = useState();
    const [buzzerEvents, setBuzzerEvents] = useState([]);
    const [buzzerLockId, setBuzzerLockId] = useState(0);
    const [buzzerLockStart, setBuzzerLockStart] = useState(null);
    const [mainPageTabIndex, setMainPageTabIndex] = useState(0);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const mqttClient = mqtt.connect(jeopardyConfig.WEBSOCKET_ENDPOINT, {
            clean: true, // Retain session
            connectTimeout: 30 * 1000, // Timeout period
            reconnectPeriod: 60 * 60 * 1000, // Reconnection period
            // Authentication information
            clientId: uuidv4(),
            username: jeopardyConfig.WEBSOCKET_USERNAME,
            password: jeopardyConfig.WEBSOCKET_PASSWORD,
        })

        mqttClient.on("connect", () => {
            console.log('connecting!');
            mqttClient.subscribe(buzzerTopic);
            mqttClient.subscribe(buzzerLockTopic);
            mqttClient.subscribe(boardTabTopic);
            mqttClient.subscribe(updateEverythingTopic);
            // mqttClient.subscribe(questionTopic);
            // mqttClient.subscribe(answerTopic);
            mqttClient.subscribe(questionAnswerTopic);
        });

        mqttClient.on('reconnect', (error) => {
            console.log('reconnecting:', error);
        })

        mqttClient.on('error', (error) => {
            console.log('Connection failed:', error);
        })

        // This API sucks
        // For tight deadlines sake, all logic for all topics will be stored inside here
        // Ima try my best to structure this but its going to suck... context wasn't meant for this :(
        mqttClient.on("message", (topic, message) => {
            console.log('receiving!');

            switch(topic) {
                case buzzerTopic:
                    setBuzzerEvents((oldEvents) => {
                        return [...oldEvents, JSON.parse(message)];
                    });
                    break;
                case buzzerLockTopic:
                    setBuzzerLockId(uuidv4());
                    setBuzzerLockStart(DateTime.now())
                    break;
                case boardTabTopic:
                    setMainPageTabIndex(Number(message));
                    break;
                case updateEverythingTopic: {
                    if (String(message) === 'board') {
                        updateBoards();
                    } else if (String(message) === 'player') {
                        updatePlayers();
                    } else {
                        console.log('bad type for update everything')
                }}
                    break;
                case questionAnswerTopic: {
                    let fullMessage = JSON.parse(message);

                    if (fullMessage.type === 'question') {
                        setQuestion(fullMessage.value);
                    } else if (fullMessage.type === 'answer') {
                        setAnswer(fullMessage.value);
                    } else {
                        console.log('bad type for q&a')
                    }}
                    break;
                default:
                    console.log('topic not found: ' + topic);
                    break;
            }

        });

        setMqttClient(mqttClient);
        return () => mqttClient.end(); // This is needed... effects run twice.... thank you strict mode...
    }, []);

    // Send buzzer event to other players
    const pushBuzzer = useCallback((time) => {
        console.log('publishing buzzer!');
        //TODO: Update room meta here via graphql
        mqttClient.publish(buzzerTopic, JSON.stringify({id : currentPlayerId, name: currentPlayerName, time}));
    }, [mqttClient, currentPlayerName]);

    // Unlock buzzer event to other players
    const unlockBuzzer = useCallback(() => {
        mqttClient.publish(buzzerLockTopic, 'test lol');
    }, [mqttClient]);

    // Clear all buzzer events and data
    const clearBuzzer = useCallback(() => {
        setBuzzerEvents([]);
        setBuzzerLockId(0);
        setBuzzerLockStart(null);
    }, [mqttClient]);

    const changeMainPageTabIndex = useCallback((tabIndex, global = false) => {
        if (global) {
            mqttClient.publish(boardTabTopic, String(tabIndex));
        }
        setMainPageTabIndex(tabIndex);
    }, [mqttClient]);

    const updateEveryonesBoardState = useCallback(() => {
        console.log('updating board state for everyone!');
        mqttClient.publish(updateEverythingTopic, String('board'));
    }, [mqttClient]);

    const updateEveryonesPlayerState = useCallback(() => {
        console.log('updating player state for everyone!');
        mqttClient.publish(updateEverythingTopic, String('player'));
    }, [mqttClient]);

    const publishQuestion = useCallback((question) => {
        console.log('publish q')
        mqttClient.publish(questionAnswerTopic, JSON.stringify({type : 'question', value : question}));
    }, [mqttClient]);
    const publishAnswer = useCallback((answer) => {
        console.log('publish a')
        mqttClient.publish(questionAnswerTopic, JSON.stringify({type : 'answer', value : answer}));
    }, [mqttClient]);
    const resetQuestionData = useCallback(() => {
        setQuestion('');
        setAnswer('');
    }, [mqttClient]);

    const contextValue = {mqttClient, buzzerEvents, pushBuzzer, buzzerLockId, buzzerLockStart, unlockBuzzer,
        clearBuzzer, mainPageTabIndex, changeMainPageTabIndex, updateEveryonesBoardState, updateEveryonesPlayerState,
        question, answer, publishQuestion, publishAnswer, resetQuestionData};

    return (
        <MqttContext.Provider value={contextValue}>
            {children}
        </MqttContext.Provider>
    );
}

// MQTT over websockets


export {MqttContext, MqttContextProvider};