import React from 'react';
import {Box, Grid, GridItem} from "@chakra-ui/react";

export function BoardPage() {
    const gridItemStyle = {h : '5rem', lineHeight: '5rem', textAlign : 'center'};
    const activeItemStyle = {color: 'gray.200', bg: 'teal.500'};
    const inactiveItemStyle = {color: 'gray.700', bg: 'gray.900'};

    return (
        <Box display="flex" flex="1" w="100%" h="100%" padding="2rem 2rem">
            <Grid
                w="100%" h="100%"
                templateRows='repeat(6, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={1}
            >
                <GridItem colSpan={5} {...activeItemStyle} {...gridItemStyle}>Board</GridItem>
                <GridItem {...activeItemStyle} {...gridItemStyle}>Column 1</GridItem>
                <GridItem {...inactiveItemStyle} {...gridItemStyle}>Column 2</GridItem>
                <GridItem {...gridItemStyle}>Column 3</GridItem>
                <GridItem {...gridItemStyle}>Column 4</GridItem>
                <GridItem {...gridItemStyle}>Column 5</GridItem>

                <GridItem {...gridItemStyle}>100</GridItem>
                <GridItem {...gridItemStyle}>100</GridItem>
                <GridItem {...gridItemStyle}>100</GridItem>
                <GridItem {...gridItemStyle}>100</GridItem>
                <GridItem {...gridItemStyle}>100</GridItem>

                <GridItem {...gridItemStyle}>200</GridItem>
                <GridItem {...gridItemStyle}>200</GridItem>
                <GridItem {...gridItemStyle}>200</GridItem>
                <GridItem {...gridItemStyle}>200</GridItem>
                <GridItem {...gridItemStyle}>200</GridItem>

                <GridItem {...gridItemStyle}>300</GridItem>
                <GridItem {...gridItemStyle}>300</GridItem>
                <GridItem {...gridItemStyle}>300</GridItem>
                <GridItem {...gridItemStyle}>300</GridItem>
                <GridItem {...gridItemStyle}>300</GridItem>

                <GridItem {...gridItemStyle}>400</GridItem>
                <GridItem {...gridItemStyle}>400</GridItem>
                <GridItem {...gridItemStyle}>400</GridItem>
                <GridItem {...gridItemStyle}>400</GridItem>
                <GridItem {...gridItemStyle}>400</GridItem>

                <GridItem {...gridItemStyle}>500</GridItem>
                <GridItem {...gridItemStyle}>500</GridItem>
                <GridItem {...gridItemStyle}>500</GridItem>
                <GridItem {...gridItemStyle}>500</GridItem>
                <GridItem {...gridItemStyle}>500</GridItem>
            </Grid>
        </Box>

    );
}