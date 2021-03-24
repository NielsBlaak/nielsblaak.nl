import React from 'react';
import Tussenstand from '../components/Tussenstand';
import LeagueTable from '../components/Table';
import { matches }  from '../data/matches';

export const TussenstandPage = () => {
    return (
        <>
            <Tussenstand matches={matches} />
            <LeagueTable />
        </>
    );
};