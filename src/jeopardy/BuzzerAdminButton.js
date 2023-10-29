import React from 'react';
import {IconButton} from "@chakra-ui/react";

// Styled component for BuzzerAdminPage
export function BuzzerAdminButton(props) {
    return (
        <IconButton
            isRound={true}
            width='2em'
            height='2em'
            fontSize='2em'
            aria-label="Download"
            {...props}
        />
    );
}