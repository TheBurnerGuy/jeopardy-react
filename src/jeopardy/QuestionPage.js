import React from 'react';
import {Center, Flex, Spacer} from "@chakra-ui/react";

export function QuestionPage() {
    return (
        <Flex width="100%" direction="column">
           <Center fontSize="3xl" textAlign="center" h="400px">Question Box</Center>
           <Spacer />
           <Center fontSize="3xl" textAlign="center" h="200px">Answer Box</Center>
        </Flex>
    );
}