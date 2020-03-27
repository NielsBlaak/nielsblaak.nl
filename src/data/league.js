class League {
    constructor(matches) {
        this.matches = matches;
        this.table = {};
    }
  
    getStandings() {
      this.matches.forEach(match => {
        const { homeTeam, awayTeam } = match;
  
        // add teams to the table
        if (!this.table[homeTeam]) this.addToTable(homeTeam);
        if (!this.table[awayTeam]) this.addToTable(awayTeam);
  
        // increase the played counter
        this.increasePlayed([homeTeam, awayTeam]);
        // calculate won,lost, drawn
        this.setResults(match);
        // calculate goalsScored and goalsAgainst
      });
      // all is done; return the table
      return this.table;
    }
  
    addToTable(team) {
        this.table[team] = {
            name: team,
            played: 0,
            won: 0,
            lost: 0,
            drawn: 0,
            points: 0,
            goalsScored: 0,
            goalsAgainst: 0,
            goalDifference: 0
        };
    }
  
    increasePlayed(teams) {
        teams.forEach(team => this.table[team].played = this.table[team].won + this.table[team].lost + this.table[team].drawn);
    }
  
    setResults(match) {
      const {
        homeTeam, awayTeam, homeGoals, awayGoals
      } = match;

      if (homeGoals) {
          this.table[homeTeam].goalsScored  = this.table[homeTeam].goalsScored += homeGoals;
          this.table[awayTeam].goalsAgainst = this.table[awayTeam].goalsAgainst += homeGoals;
      }

      if (awayGoals) {
          this.table[awayTeam].goalsScored = this.table[awayTeam].goalsScored += awayGoals;
          this.table[homeTeam].goalsAgainst = this.table[homeTeam].goalsAgainst += awayGoals;
      }

      this.table[homeTeam].goalDifference = this.table[homeTeam].goalsScored - this.table[homeTeam].goalsAgainst;
      this.table[awayTeam].goalDifference = this.table[awayTeam].goalsScored - this.table[awayTeam].goalsAgainst;

  
      if (homeGoals > awayGoals) {
            this.table[homeTeam].won++;
            this.table[homeTeam].points = this.table[homeTeam].points += 3;
            this.table[awayTeam].lost++;
            
        } else if (homeGoals < awayGoals) {
            this.table[awayTeam].won++;
            this.table[awayTeam].points = this.table[awayTeam].points += 3;
            this.table[homeTeam].lost++;
        } else if (!homeGoals && !awayGoals) {
            return;
        } else if (homeGoals === awayGoals) {
            this.table[awayTeam].drawn++;
            this.table[homeTeam].drawn++;
            this.table[awayTeam].points = this.table[awayTeam].points += 1;
            this.table[homeTeam].points = this.table[homeTeam].points += 1;
        }
    }
  }
  
  module.exports = League;