import { loadDB }   from '../hoc/getFirestore';
import { teams }    from '../data/teams';

export const setDb = (db = loadDB) => {
    teams.map(team => {
        return db.collection("teams").add({
            name: team
        }).then(ref => {
            console.log('Added document with ID: ', ref.id);
        });
    })
}