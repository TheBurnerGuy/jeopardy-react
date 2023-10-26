import React, {useState, useEffect, useCallback} from 'react';
import * as mqtt from 'mqtt/dist/mqtt.min'
import jeopardyConfig from "./jeopardyconfig.json";

const MqttBuzzerContext = React.createContext({
    buzzerEvents : [],
    mqttBuzzer : null,
    pushBuzzer : () => {},
});

const topicName = 'buzzer';

function MqttBuzzerContextProvider({children}) {
    const [buzzerEvents, setBuzzerEvents] = useState([]);
    const [mqttBuzzer, setMqttBuzzer] = useState();

    useEffect(() => {
        const mqttBuzzer = mqtt.connect(jeopardyConfig.WEBSOCKET_ENDPOINT, {
            clean : true, // Retain session
            connectTimeout: 30 * 1000, // Timeout period
            reconnectPeriod: 5000, // Reconnection period
            // Authentication information
            clientId: jeopardyConfig.WEBSOCKET_CLIENTID,
            username: jeopardyConfig.WEBSOCKET_USERNAME,
            password: jeopardyConfig.WEBSOCKET_PASSWORD,
        })

        mqttBuzzer.on("connect", () => {
            console.log('connecting!')
            mqttBuzzer.subscribe(topicName);
        });

        mqttBuzzer.on("message", (topic, message) => {
            console.log('receiving!')
            setBuzzerEvents((oldEvents) => {
                console.log('receiving part 2')
                return [...oldEvents, JSON.parse(message)];
            });
        });

        mqttBuzzer.on('reconnect', (error) => {
            console.log('reconnecting:', error)
        })

        mqttBuzzer.on('error', (error) => {
            console.log('Connection failed:', error)
        })

        setMqttBuzzer(mqttBuzzer);
        // return mqttBuzzer.end;
    }, []);

    const pushBuzzer = useCallback(() => {
        console.log('publishing!')
        mqttBuzzer.publish(topicName, JSON.stringify({text : 'Buzzer Pressed!', timestamp : Date.now()}));
    }, [mqttBuzzer]);

    return (
        <MqttBuzzerContext.Provider value={{buzzerEvents, mqttBuzzer, pushBuzzer}}>
            {children}
        </MqttBuzzerContext.Provider>
    );
}

// MQTT over websockets


export {MqttBuzzerContext, MqttBuzzerContextProvider};