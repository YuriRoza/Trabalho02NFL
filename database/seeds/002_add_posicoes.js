
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posicoes').del()
    .then(function () {
      // Inserts seed entries
      return knex('posicoes').insert([
        {nome: 'Quarterback'},
        {nome: 'Running Back'},
        {nome: 'Full Back'},
        {nome: 'Wide Receiver'},
        {nome: 'Tight End'},
        {nome: 'Center'},
        {nome: 'Right Guard'},
        {nome: 'Left Guard'},
        {nome: 'Right Tackle'},
        {nome: 'Left Tackle'},
        {nome: 'Defensive End'},
        {nome: 'Defensive Tackle'},
        {nome: 'Inside Linebacker'},
        {nome: 'Outside Linebacker'},
        {nome: 'Cornerback'},
        {nome: 'Strong Safety'},
        {nome: 'Free Safety'},
        {nome: 'Kicker'},
        {nome: 'Punter'},
        {nome: 'Returner'}
      ]);
    });
};
