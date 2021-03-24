import React        from 'react';
import orderBy      from 'lodash/orderBy';

import League       from '../data/league';
import { matches }  from '../ek/matches';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import '../scss/table.scss';

const LeagueTable = () => {
    const league = new League(matches.flat());
    const standings = league.getStandings();
    return (
        <>
            <h1 style={{textAlign: 'center', width: '100%'}}>Tussenstand</h1>
                <Table size="small" aria-label="a dense table" style={{ overflow: 'auto', backgroundCcolor: '#f2f2f2' }}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell align="right">GW</TableCell>
                        <TableCell align="right">W</TableCell>
                        <TableCell align="right">G</TableCell>
                        <TableCell align="right">V</TableCell>
                        <TableCell align="right">P</TableCell>
                        <TableCell align="right">GD</TableCell>
                        <TableCell align="right">TD</TableCell>
                        <TableCell align="right">DS</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Object.values(orderBy(standings, ['points', 'goalDifference'], ['desc', 'desc'])).map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" style={{maxWidth: '25px', overflow: 'hidden' }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.played}</TableCell>
                            <TableCell align="right">{row.won}</TableCell>
                            <TableCell align="right">{row.drawn}</TableCell>
                            <TableCell align="right">{row.lost}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                            <TableCell align="right">{row.goalsScored}</TableCell>
                            <TableCell align="right">{row.goalsAgainst}</TableCell>
                            <TableCell align="right">{row.goalDifference}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </>
    );
};

export default LeagueTable;