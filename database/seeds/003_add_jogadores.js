
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogadores').del()
    .then(function () {
      // Inserts seed entries
      return knex('jogadores').insert([
        {nome: 'Tom Brady', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/sfehmfwtg9i5gdcpqzgf', idade: 43, anos_liga: 22, time_id: 30, posicao_id: 1},
        {nome: 'Stefon Diggs', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/hcvd2avk0kufoli80veb', idade: 27, anos_liga: 7, time_id: 4, posicao_id: 4},
        {nome: 'Derrick Henry', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ftghij9da8irwz2zpxji', idade: 27, anos_liga: 6, time_id: 31, posicao_id: 2},
        {nome: 'Bobby Wagner', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/edj5dnjfcz26wwfsi5qy', idade: 30, anos_liga: 10, time_id: 29, posicao_id: 13},
        {nome: 'Stephon Gilmore', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 30, anos_liga: 10, time_id: 21, posicao_id: 15},
        {nome: 'Patrick Mahomes', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 25, anos_liga: 5, time_id: 16, posicao_id: 1},
        {nome: 'Ezekiel Elliott', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 25, anos_liga: 6, time_id: 9, posicao_id: 2},
        {nome: 'Saquon Barkley', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 24, anos_liga: 4, time_id: 23, posicao_id: 2},
        {nome: 'Aaron Rodgers', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 37, anos_liga: 17, time_id: 12, posicao_id: 1},
        {nome: 'Khalil Mack', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 30, anos_liga: 8, time_id: 6, posicao_id: 14},
        {nome: 'Aaron Donald', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 30, anos_liga: 8, time_id: 18, posicao_id: 11},
        {nome: 'Travis Kelce', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 31, anos_liga: 9, time_id: 16, posicao_id: 5},
        {nome: 'DK Metcalf', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 23, anos_liga: 3, time_id: 29, posicao_id: 4},
        {nome: 'Marlon Humphrey', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 24, anos_liga: 5, time_id: 3, posicao_id: 15},
        {nome: 'Chase Young', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 22, anos_liga: 2, time_id: 32, posicao_id: 11},
        {nome: 'Myles Garrett', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 25, anos_liga: 5, time_id: 8, posicao_id: 11},
        {nome: 'J.J. Watt', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 32, anos_liga: 11, time_id: 13, posicao_id: 1},
        {nome: 'T.J. Watt', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 26, anos_liga: 5, time_id: 27, posicao_id: 14},
        {nome: 'Xavien Howard', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 27, anos_liga: 6, time_id: 19, posicao_id: 15},
        {nome: 'Tyrann Mathieu', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 29, anos_liga: 9, time_id: 16, posicao_id: 17},
        {nome: 'Adam Vinatieri', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 48, anos_liga: 25, time_id: 14, posicao_id: 18},
        {nome: 'Younghoe Koo', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu02fv', idade: 26, anos_liga: 3, time_id: 2, posicao_id: 18},
        {nome: 'CeeDee Lamb', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 22, anos_liga: 2, time_id: 9, posicao_id: 20},
        {nome: 'Cordarelle Patterson', foto: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ded8x9b7yr7bd2imu0fv', idade: 30, anos_liga: 9, time_id: 2, posicao_id: 20},
      ]);
    });
};
