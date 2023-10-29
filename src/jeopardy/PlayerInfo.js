import React, {useContext} from 'react';
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
    UnorderedList,
} from "@chakra-ui/react";
import {MdAccessibility} from "react-icons/md";
import {GameStateContext} from "../GameStateContext";
import {PlayerInfoItem} from "./PlayerInfoItem";

export function PlayerInfo() {
    const {players} = useContext(GameStateContext);

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
                        {players && players.map(player => (
                            <ListItem key={player.id}>
                                <PlayerInfoItem player={player} />
                            </ListItem>
                        ))}
                    </UnorderedList>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    );
}