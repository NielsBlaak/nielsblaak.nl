import React from 'react';
import Tussenstand from '../components/Tussenstand';
import LeagueTable from '../components/Table';
import TopScorer from '../components/Topscorers';
import { matches } from '../ek/matches';

export const Euro = () => (
    <>
        <Tussenstand matches={matches} />
        <LeagueTable />
        <TopScorer />
    </>
);