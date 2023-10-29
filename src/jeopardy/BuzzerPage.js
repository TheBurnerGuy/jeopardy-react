import React, {useContext} from 'react';
import {BuzzerUserPage} from "./BuzzerUserPage";
import {BuzzerAdminPage} from "./BuzzerAdminPage";
import {GameStateContext} from "../GameStateContext";

export function BuzzerPage() {
    const {isAdmin} = useContext(GameStateContext);

    if (isAdmin) {
        return (
            <BuzzerAdminPage />
        )
    } else {
        return (
            <BuzzerUserPage />
        );
    }
}