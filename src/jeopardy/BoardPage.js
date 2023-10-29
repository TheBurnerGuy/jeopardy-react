import React, {useContext} from 'react';
import {Grid, GridItem} from "@chakra-ui/react";
import {GameStateContext} from "../GameStateContext";
import {MqttContext} from "../mqttContext";

export function BoardPage({number}) {
    const {boards, updateBoardFields, isAdmin} = useContext(GameStateContext);
    const {updateEveryonesBoardState} = useContext(MqttContext);
    const board = boards && boards[number];

    const gridItemStyle = {h : '5rem', lineHeight: '5rem', textAlign : 'center'};
    const headerItemStyle = {color: 'gray.200', bg: 'green.500', fontWeight : 'bold'};
    const activeItemStyle = {color: 'gray.200', bg: 'teal.500'};
    const inactiveItemStyle = {color: 'gray.700', bg: 'gray.900'};

    const renderGridItem = (identity, points) => {
        const isActive = board[identity]
        const customStyles = isActive ? activeItemStyle : inactiveItemStyle;
        const handleClick = isAdmin ? async () => {
            await updateBoardFields(board?.id, identity, !board[identity]);
            await updateEveryonesBoardState();
        } : undefined;

        return (
            <GridItem onClick={handleClick} {...customStyles} {...gridItemStyle}>{points}</GridItem>
        );
    };

    if (!board) {
        return null;
    }

    return (
        <Grid
            w="100%" h="100%"
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}
        >
            <GridItem colSpan={5} {...headerItemStyle} {...gridItemStyle}>{`Board ${number}`}</GridItem>
            <GridItem {...headerItemStyle} {...gridItemStyle}>{board.columnA}</GridItem>
            <GridItem {...headerItemStyle} {...gridItemStyle}>{board.columnB}</GridItem>
            <GridItem {...headerItemStyle} {...gridItemStyle}>{board.columnC}</GridItem>
            <GridItem {...headerItemStyle} {...gridItemStyle}>{board.columnD}</GridItem>
            <GridItem {...headerItemStyle} {...gridItemStyle}>{board.columnE}</GridItem>

            {renderGridItem('a1', 100)}
            {renderGridItem('b1', 100)}
            {renderGridItem('c1', 100)}
            {renderGridItem('d1', 100)}
            {renderGridItem('e1', 100)}

            {renderGridItem('a2', 200)}
            {renderGridItem('b2', 200)}
            {renderGridItem('c2', 200)}
            {renderGridItem('d2', 200)}
            {renderGridItem('e2', 200)}

            {renderGridItem('a3', 300)}
            {renderGridItem('b3', 300)}
            {renderGridItem('c3', 300)}
            {renderGridItem('d3', 300)}
            {renderGridItem('e3', 300)}

            {renderGridItem('a4', 400)}
            {renderGridItem('b4', 400)}
            {renderGridItem('c4', 400)}
            {renderGridItem('d4', 400)}
            {renderGridItem('e4', 400)}

            {renderGridItem('a5', 500)}
            {renderGridItem('b5', 500)}
            {renderGridItem('c5', 500)}
            {renderGridItem('d5', 500)}
            {renderGridItem('e5', 500)}
        </Grid>

    );
}