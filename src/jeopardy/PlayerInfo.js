import React from 'react';
import {
    Icon,
    IconButton,
    ListItem,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    UnorderedList
} from "@chakra-ui/react";
import {MdAccessibility} from "react-icons/md";

export function PlayerInfo() {
    return (
        <Popover>
            <PopoverTrigger>
                <IconButton
                    position="absolute"
                    bottom="0"
                    left="0"
                    width='2em'
                    height='2em'
                    fontSize='1em'
                    colorScheme='gray'
                    icon={<Icon as={MdAccessibility} />}
                    aria-label="Download"
                />
            </PopoverTrigger>
            <PopoverContent background="green.500">
                <PopoverCloseButton />
                <PopoverHeader>Player Info</PopoverHeader>
                <PopoverBody>
                    <UnorderedList>
                        <ListItem>Player1</ListItem>
                        <ListItem>Player2</ListItem>
                        <ListItem>Player3</ListItem>
                        <ListItem>Player4</ListItem>
                    </UnorderedList>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    );
}