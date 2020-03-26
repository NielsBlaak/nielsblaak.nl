import React    from 'react';
// import { teams }    from '../data/teams';
import { matches }  from '../data/matches';

const Tussenstand = () => {
    const [matchday, setMatchday] = React.useState(0);
    return (
        <div style={{textAlign: 'center', width: '100%'}}>
            <h1>Uitslagen</h1>
            <table style={{margin: `50px auto`}}>
                <tr>
                    <th>Thuis</th>
                    <th>Uit</th>
                    <th>Uitslag</th>
                </tr>
            {matches.map((match, i) => {
                if (matchday === i) {
                    return match.map(result => {
                        return (
                                <tr>
                                    <td>{result.homeTeam}</td>
                                    <td>{result.awayTeam}</td>
                                    <td>{result.homeGoals} - {result.awayGoals}</td>
                                </tr>
                        )
                    })
                } else return null;
            })}
            </table>
            <div style={{marginBottom: '50px'}}>
                <p>Wedstrijddag</p>
                {matches.map((_match, i) => {
                    return (
                        <button style={{margin: '0 3px'}} onClick={() => setMatchday(i)}>{i + 1}</button>
                    )
                })}
            </div>
        </div>
    );
};

export default Tussenstand;