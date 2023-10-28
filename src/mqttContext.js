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
    mainPageTabIndex: 0,
    changeMainPageTabIndex: () => {},
});

const buzzerTopic = 'buzzer';
const buzzerLockTopic = 'buzzer_lock';
const displayTopic = 'display';
const boardTopic = 'board';
const boardTabTopic = 'board_tab';
const playerTopic = 'playerTopic';

/**
 * Starts mqttClient.
 *
 * Due to Mqtt's terrible API, we store various state here as well instead of in GameStateContext.
 * This component is responsible for state that isn't vital and doesn't need to be saved into our database.
 */
function MqttContextProvider({children}) {
    const {currentPlayerId, currentPlayerName} = useContext(GameStateContext);
    const [mqttClient, setMqttClient] = useState();
    const [buzzerEvents, setBuzzerEvents] = useState([]);
    const [buzzerLockId, setBuzzerLockId] = useState(null);
    const [buzzerLockStart, setBuzzerLockStart] = useState(null);
    const [mainPageTabIndex, setMainPageTabIndex] = useState(2); //TODO: Reset to 0

    useEffect(() => {
        const mqttClient = mqtt.connect(jeopardyConfig.WEBSOCKET_ENDPOINT, {
            clean: true, // Retain session
            connectTimeout: 30 * 1000, // Timeout period
            reconnectPeriod: 60 * 60 * 1000, // Reconnection period
            // Authentication information
            clientId: jeopardyConfig.WEBSOCKET_CLIENTID,
            username: jeopardyConfig.WEBSOCKET_USERNAME,
            password: jeopardyConfig.WEBSOCKET_PASSWORD,
        })

        mqttClient.on("connect", () => {
            console.log('connecting!')
            mqttClient.subscribe(buzzerTopic);
            mqttClient.subscribe(buzzerLockTopic);
        });

        mqttClient.on('reconnect', (error) => {
            console.log('reconnecting:', error)
        })

        mqttClient.on('error', (error) => {
            console.log('Connection failed:', error)
        })

        // This API sucks
        // For tight deadlines sake, all logic for all topics will be stored inside here
        // Ima try my best to structure this but its going to suck... context wasn't meant for this :(
        mqttClient.on("message", (topic, message) => {
            console.log('receiving!')

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
                case changeMainPageTabIndex:
                    setMainPageTabIndex(Number(message));
                    break;
                default:
                    console.log('topic not found: ' + topic)
                    break;
            }

        });

        setMqttClient(mqttClient);
        // return mqttBuzzer.end; // This is for best practice but I dont want the chance to call this - we only initialize it once for this app
    }, []);

    // Send buzzer event to other players
    const pushBuzzer = useCallback((time) => {
        console.log('publishing buzzer!')
        //TODO: Update room meta here via graphql
        mqttClient.publish(buzzerTopic, JSON.stringify({id : currentPlayerId, name: currentPlayerName, time}));
    }, [mqttClient, currentPlayerName]);

    // Unlock buzzer event to other players
    const unlockBuzzer = useCallback(() => {
        mqttClient.publish(buzzerLockTopic, 'test lol');
    }, []);

    const changeMainPageTabIndex = useCallback((tabIndex, global = false) => {
        if (global) {
            mqttClient.publish(boardTabTopic, String(tabIndex));
        }
        setMainPageTabIndex(tabIndex);
    }, []);

    const contextValue = {mqttClient, buzzerEvents, pushBuzzer, buzzerLockId, buzzerLockStart, unlockBuzzer,
        mainPageTabIndex, changeMainPageTabIndex};

    return (
        <MqttContext.Provider value={contextValue}>
            {children}
        </MqttContext.Provider>
    );
}

// MQTT over websockets


export {MqttContext, MqttContextProvider};