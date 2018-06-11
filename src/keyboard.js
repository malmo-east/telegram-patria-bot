const kb = require('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.films, kb.home.cinemas],
    [kb.home.favourite]
  ],
  films: [
    [kb.cinema_title.loteanu, kb.cinema_title.multiplex],
    [kb.cinema_title.riscani, kb.cinema_title.balti],
    [kb.back]
  ],
  schedule: [
    [kb.date.today],
    [kb.date.tomorrow, kb.date.after_tomorrow],
    [kb.back]
  ],
  cinemas: [
    [
      {
        text: 'Отправить местоположение',
        request_location: true
      }
    ],
    [kb.back]
  ]
}