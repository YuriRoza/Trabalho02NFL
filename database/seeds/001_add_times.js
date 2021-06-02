
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('times').del()
    .then(function () {
      // Inserts seed entries
      return knex('times').insert([
        {nome: 'Arizona Cardinals'},
        {nome: 'Atlanta Falcons'},
        {nome: 'Baltimore Ravens'},
        {nome: 'Buffalo Bills'},
        {nome: 'Carolina Panthers'},
        {nome: 'Chicago Bears'},
        {nome: 'Cincinnati Bengals'},
        {nome: 'Cleveland Browns'},
        {nome: 'Dallas Cowboys'},
        {nome: 'Denver Broncos'},
        {nome: 'Detroit Lions'},
        {nome: 'Green Bay Packers'},
        {nome: 'Houston Texans'},
        {nome: 'Indianapolis Colts'},
        {nome: 'Jacksonville Jaguars'},
        {nome: 'Kansas City Chiefs'},
        {nome: 'Los Angeles Chargers'},
        {nome: 'Los Angeles Rams'},
        {nome: 'Miami Dolphins'},
        {nome: 'Minnesota Vikings'},
        {nome: 'New England Patriots'},
        {nome: 'New Orleans Saints'},
        {nome: 'New York Giants'},
        {nome: 'New York Jets'},
        {nome: 'Oakland Raiders'},
        {nome: 'Philadelphia Eagles'},
        {nome: 'Pittsburgh Steelers'},
        {nome: 'San Francisco 49ers'},
        {nome: 'Seattle Seahawks'},
        {nome: 'Tampa Bay Buccaneers'},
        {nome: 'Tennessee Titans'},
        {nome: 'Washington Football Team'}
      ]);
    });
};
