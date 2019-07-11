const locations = [
  // USA
  { city: 'New York', coordinates: [40.712776, -74.005974] },
  { city: 'Orlando', coordinates: [28.538336, -81.379234] },
  { city: 'Miami', coordinates: [25.761681, -80.191788] },
  { city: 'Everglades', coordinates: [25.18045, -80.791908] },
  { city: 'Cancún', coordinates: [21.1734, -86.8281] },

  // Hawaii
  { city: 'Big Island', coordinates: [19.542915, -155.665863] },
  { city: 'Kauai', coordinates: [22.096439, -159.526123] },
  { city: 'Honolulu', coordinates: [21.306944, -157.858337] },

  // England
  { city: 'Dublin', coordinates: [53.349804, -6.26031] },
  { city: 'London', coordinates: [51.507351, -0.127758] },
  { city: 'Edinburgh', coordinates: [55.953251, -3.188267] },
  { city: 'Oxford', coordinates: [51.752022, -1.257726] },
  { city: 'Bristol', coordinates: [51.455311, -2.5919] },
  { city: 'Gloucester', coordinates: [51.866741, -2.24867] },
  { city: 'Bath', coordinates: [51.38488, -2.36197] },
  { city: 'Salisbury', coordinates: [51.067402, -1.79763] },
  { city: 'Newcastle upon Tyne', coordinates: [54.978252, -1.61778] },
  { city: 'Alnwick', coordinates: [55.412743, -1.706299] },

  // Europe
  { city: 'Leuven', coordinates: [50.879845, 4.700518] },
  { city: 'Ans', coordinates: [50.6613547, 5.5076683] },
  { city: 'Ieper', coordinates: [50.85125, 2.88419] },
  { city: 'Maaseik', coordinates: [51.094791, 5.79397] },
  { city: 'Bouillon', coordinates: [49.79557, 5.06811] },
  { city: 'Modave', coordinates: [50.442291, 5.30056] },
  { city: 'Berlin', coordinates: [52.520008, 13.404954] },
  { city: 'Kevelaer', coordinates: [51.582062, 6.24805] },
  { city: 'Düsseldorf', coordinates: [51.227741, 6.773456] },
  { city: 'Köln', coordinates: [50.937531, 6.960279] },
  { city: 'Aachen', coordinates: [50.775429, 6.08149] },
  { city: 'Antwerp', coordinates: [51.219448, 4.402464] },
  { city: 'Paris', coordinates: [48.856613, 2.352222] },
  { city: 'Nice', coordinates: [43.710175, 7.261953] },
  { city: 'Rome', coordinates: [41.902782, 12.496365] },
  { city: 'Valencia', coordinates: [39.470242, -0.3768] },
  { city: 'Faro', coordinates: [37.019356, -7.93044] },
  { city: 'Florence', coordinates: [43.769562, 11.255814] },
  {
    city: 'San Jacopo al Girone',
    coordinates: [43.769928, 11.339814]
  },
  { city: 'Perugia', coordinates: [43.110718, 12.390828] },
  { city: 'Pisa', coordinates: [43.722839, 10.401689] },
  {
    city: 'Cascata delle Marmore Belvedere Superiore',
    coordinates: [42.551162, 12.715248]
  },
  { city: 'San Gimignano', coordinates: [43.470329, 11.04376] },
  { city: 'Castellina in Chianti', coordinates: [43.471359, 11.28537] },
  { city: 'Siena', coordinates: [43.31881, 11.330757] },
  { city: 'Lucca', coordinates: [43.83762, 10.495061] },
  { city: 'Orvieto', coordinates: [42.716469, 12.11157] },
  { city: 'Lago Trasimeno', coordinates: [43.137693, 12.102642] },
  { city: 'Bagnoregio', coordinates: [42.62698, 12.090872] },
  { city: 'Catania', coordinates: [37.507877, 15.08303] },
  { city: 'Agios Nikolaos', coordinates: [35.189018, 25.71707] },
  { city: 'Piskopiano', coordinates: [35.30849, 25.38433] },
  { city: 'Impros', coordinates: [35.25468, 24.17193] },
  { city: 'Plitvice Lakes', coordinates: [44.8820562, 15.5933577] },
  { city: 'Helsinki', coordinates: [60.169857, 24.938379] },
  { city: 'Rovaniemi', coordinates: [66.503944, 25.729391] },
  { city: 'Oulu', coordinates: [65.012093, 25.465076] },
  { city: 'Kemi', coordinates: [65.736092, 24.563629] },
  { city: 'Pyhä-Luoston', coordinates: [67.165403, 26.909171] },
  { city: 'Ranua', coordinates: [57.330683, 25.612312] },
  { city: 'Olkkajärvi', coordinates: [66.58773, 26.045143] },

  // Russia
  { city: 'Moscow', coordinates: [55.755825, 37.617298] },
  { city: 'St. Petersburg', coordinates: [59.93848, 30.312481] },
  { city: 'Anapa', coordinates: [44.89468, 37.31815] },
  { city: 'Natukhayevskaya', coordinates: [44.90839, 37.5634] },
  { city: 'Domodedovo', coordinates: [55.443199, 37.74778] },
  { city: 'Krasnodar', coordinates: [45.01493, 38.96705] },
  { city: 'Novorossiejsk', coordinates: [44.72366, 37.76951] },
  { city: 'Abrau', coordinates: [44.70306, 37.60169] },
  { city: 'Gelendzhik', coordinates: [44.56036, 38.078892] },
  { city: 'Adler', coordinates: [43.426651, 39.92326] },
  { city: 'Sochi', coordinates: [43.60281, 39.734154] }
]

export default locations
