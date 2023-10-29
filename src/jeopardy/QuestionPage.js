import React, {useEffect, useContext, useState, useCallback} from 'react';
import {Center, Editable, EditableInput, EditablePreview, Flex, Spacer} from "@chakra-ui/react";
import {MqttContext} from "../mqttContext";
import {GameStateContext} from "../GameStateContext";

export function QuestionPage() {
    const {isAdmin} = useContext(GameStateContext);
    const {mainPageTabIndex, clearBuzzer, publishQuestion, publishAnswer, resetQuestionData, question, answer} = useContext(MqttContext);

    const [localQuestion, setLocalQuestion] = useState('question box');
    const [localAnswer, setLocalAnswer] = useState('answer box');

    // Landing on question page will automatically reset buzzer and clear previous question data
    useEffect(() => {
        if (mainPageTabIndex === 2) {
            clearBuzzer();
            resetQuestionData();
            setLocalQuestion('question box');
            setLocalAnswer('answer box');
        }
    }, [mainPageTabIndex]);

    const handleQuestionSubmitted = useCallback(() => {
        publishQuestion(localQuestion);
    }, [localQuestion, publishQuestion]);

    const handleAnswerSubmitted = useCallback(() => {
        publishAnswer(localAnswer);
    }, [localAnswer, publishAnswer]);

    return (
        <Flex width="100%" direction="column">
           <Center fontSize="3xl" textAlign="center" h="400px">
               {isAdmin ? (
                   <Editable minWidth="360px" border="thick double #32a1ce" value={localQuestion} onChange={value => setLocalQuestion(value)} onSubmit={handleQuestionSubmitted}>
                       <EditablePreview />
                       <EditableInput />
                   </Editable>
               ) : question}
           </Center>
           <Spacer />
           <Center fontSize="3xl" textAlign="center" h="200px">
               {isAdmin ? (
                   <Editable minWidth="360px" border="thick double #32a1ce" value={localAnswer} onChange={value => setLocalAnswer(value)} onSubmit={handleAnswerSubmitted}>
                       <EditablePreview />
                       <EditableInput />
                   </Editable>
               ) : answer}
           </Center>
        </Flex>
    );
}