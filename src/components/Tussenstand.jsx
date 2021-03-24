import React from 'react';

const Tussenstand = ({ matches }) => {
    const [matchday, setMatchday] = React.useState(0);

    // const save = (homeGoals, awayGoals, i) => {
    //     Object.assign(matches[matchday][i], {homeGoals: homeGoals, awayGoals: awayGoals});
    // }

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
                            <>
                                <tr>
                                    <td>{result.homeTeam}</td>
                                    <td>{result.awayTeam}</td>
                                    <td>{result.homeGoals} - {result.awayGoals}</td>
                                </tr>
                                {/* <tr>
                                    <td><input type="number" id="input1" name="homeGoals" /></td>
                                    <td><input type="number" id="input2" name="awayGoals" /></td>        
                                    <td><button onClick={() => save(document.getElementById('input1').value, document.getElementById('input2').value, i)}>Opslaan</button></td>
                                </tr> */}
                            </>
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