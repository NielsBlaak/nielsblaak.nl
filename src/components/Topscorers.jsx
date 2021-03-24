import React from 'react';
import { Table, TableCell, TableRow } from '@material-ui/core';

const TopScorer = () => {
    const scorers = [
        {
            name: 'Ed de Goey',
            amount: 2
        }
    ]

    return (
        <Table size="small" aria-label="a dense table" style={{ overflow: 'auto', backgroundCcolor: '#f2f2f2', marginTop: '20px' }}>
            <TableRow>
                <TableCell align="center">Doelpuntenmaker</TableCell>
                <TableCell align="center">Aantal</TableCell>
            </TableRow>
            {scorers.map(scorer => (
                <TableRow key={scorer.name}>
                    <TableCell component="th" scope="row" align="center" style={{maxWidth: '25px', overflow: 'hidden' }}>
                        {scorer.name}
                    </TableCell>
                    <TableCell align="center">{scorer.amount}</TableCell>
                </TableRow>
            ))}
        </Table>
    )
};

export default TopScorer;