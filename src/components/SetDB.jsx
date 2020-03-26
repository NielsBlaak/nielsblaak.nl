import React from 'react';
import { setDb } from '../data/setDb';

const SetDB = () => {
    return (
        <button onClick={() => setDb()}>Zet teams in database</button>
    )
};

export default SetDB