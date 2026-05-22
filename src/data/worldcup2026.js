const groups = [
  {
    id: 'A', name: 'Grupo A',
    teams: [
      { name: 'Mexico', flag: '🇲🇽', code: 'MEX', pot: 1 },
      { name: 'South Korea', flag: '🇰🇷', code: 'KOR', pot: 2 },
      { name: 'South Africa', flag: '🇿🇦', code: 'RSA', pot: 3 },
      { name: 'Czechia', flag: '🇨🇿', code: 'CZE', pot: 4 },
    ],
    matches: [
      { id: 1, date: '2026-06-11', time: '15:00', home: 'Mexico', away: 'South Africa', stadiumId: 'azteca' },
      { id: 2, date: '2026-06-11', time: '22:00', home: 'South Korea', away: 'Czechia', stadiumId: 'akron' },
      { id: 25, date: '2026-06-18', time: '12:00', home: 'Czechia', away: 'South Africa', stadiumId: 'mercedesbenz' },
      { id: 28, date: '2026-06-18', time: '21:00', home: 'Mexico', away: 'South Korea', stadiumId: 'akron' },
      { id: 53, date: '2026-06-24', time: '21:00', home: 'Czechia', away: 'Mexico', stadiumId: 'azteca' },
      { id: 54, date: '2026-06-24', time: '21:00', home: 'South Africa', away: 'South Korea', stadiumId: 'bbva' },
    ]
  },
  {
    id: 'B', name: 'Grupo B',
    teams: [
      { name: 'Canada', flag: '🇨🇦', code: 'CAN', pot: 1 },
      { name: 'Switzerland', flag: '🇨🇭', code: 'SUI', pot: 2 },
      { name: 'Qatar', flag: '🇶🇦', code: 'QAT', pot: 3 },
      { name: 'Bosnia and Herzegovina', flag: '🇧🇦', code: 'BIH', pot: 4 },
    ],
    matches: [
      { id: 3, date: '2026-06-12', time: '15:00', home: 'Canada', away: 'Bosnia and Herzegovina', stadiumId: 'bmofield' },
      { id: 5, date: '2026-06-13', time: '15:00', home: 'Qatar', away: 'Switzerland', stadiumId: 'levis' },
      { id: 26, date: '2026-06-18', time: '15:00', home: 'Switzerland', away: 'Bosnia and Herzegovina', stadiumId: 'sofi' },
      { id: 27, date: '2026-06-18', time: '18:00', home: 'Canada', away: 'Qatar', stadiumId: 'bcplace' },
      { id: 49, date: '2026-06-24', time: '15:00', home: 'Switzerland', away: 'Canada', stadiumId: 'bcplace' },
      { id: 50, date: '2026-06-24', time: '15:00', home: 'Bosnia and Herzegovina', away: 'Qatar', stadiumId: 'lumen' },
    ]
  },
  {
    id: 'C', name: 'Grupo C',
    teams: [
      { name: 'Brazil', flag: '🇧🇷', code: 'BRA', pot: 1 },
      { name: 'Morocco', flag: '🇲🇦', code: 'MAR', pot: 2 },
      { name: 'Haiti', flag: '🇭🇹', code: 'HAI', pot: 3 },
      { name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', code: 'SCO', pot: 4 },
    ],
    matches: [
      { id: 6, date: '2026-06-13', time: '18:00', home: 'Brazil', away: 'Morocco', stadiumId: 'metlife' },
      { id: 7, date: '2026-06-13', time: '21:00', home: 'Haiti', away: 'Scotland', stadiumId: 'gillette' },
      { id: 30, date: '2026-06-19', time: '18:00', home: 'Scotland', away: 'Morocco', stadiumId: 'gillette' },
      { id: 31, date: '2026-06-19', time: '20:30', home: 'Brazil', away: 'Haiti', stadiumId: 'lincoln' },
      { id: 51, date: '2026-06-24', time: '18:00', home: 'Scotland', away: 'Brazil', stadiumId: 'hardrock' },
      { id: 52, date: '2026-06-24', time: '18:00', home: 'Morocco', away: 'Haiti', stadiumId: 'mercedesbenz' },
    ]
  },
  {
    id: 'D', name: 'Grupo D',
    teams: [
      { name: 'United States', flag: '🇺🇸', code: 'USA', pot: 1 },
      { name: 'Australia', flag: '🇦🇺', code: 'AUS', pot: 2 },
      { name: 'Paraguay', flag: '🇵🇾', code: 'PAR', pot: 3 },
      { name: 'Türkiye', flag: '🇹🇷', code: 'TUR', pot: 4 },
    ],
    matches: [
      { id: 8, date: '2026-06-14', time: '00:00', home: 'Australia', away: 'Türkiye', stadiumId: 'bcplace' },
      { id: 4, date: '2026-06-12', time: '21:00', home: 'United States', away: 'Paraguay', stadiumId: 'sofi' },
      { id: 29, date: '2026-06-19', time: '15:00', home: 'United States', away: 'Australia', stadiumId: 'lumen' },
      { id: 32, date: '2026-06-19', time: '23:00', home: 'Türkiye', away: 'Paraguay', stadiumId: 'levis' },
      { id: 59, date: '2026-06-25', time: '22:00', home: 'Türkiye', away: 'United States', stadiumId: 'sofi' },
      { id: 60, date: '2026-06-25', time: '22:00', home: 'Paraguay', away: 'Australia', stadiumId: 'levis' },
    ]
  },
  {
    id: 'E', name: 'Grupo E',
    teams: [
      { name: 'Germany', flag: '🇩🇪', code: 'GER', pot: 1 },
      { name: 'Ecuador', flag: '🇪🇨', code: 'ECU', pot: 2 },
      { name: "Côte d'Ivoire", flag: '🇨🇮', code: 'CIV', pot: 3 },
      { name: 'Curaçao', flag: '🇨🇼', code: 'CUW', pot: 4 },
    ],
    matches: [
      { id: 9, date: '2026-06-14', time: '13:00', home: 'Germany', away: 'Curaçao', stadiumId: 'nrg' },
      { id: 11, date: '2026-06-14', time: '19:00', home: "Côte d'Ivoire", away: 'Ecuador', stadiumId: 'lincoln' },
      { id: 34, date: '2026-06-20', time: '16:00', home: 'Germany', away: "Côte d'Ivoire", stadiumId: 'bmofield' },
      { id: 35, date: '2026-06-20', time: '20:00', home: 'Ecuador', away: 'Curaçao', stadiumId: 'arrowhead' },
      { id: 55, date: '2026-06-25', time: '16:00', home: 'Curaçao', away: "Côte d'Ivoire", stadiumId: 'lincoln' },
      { id: 56, date: '2026-06-25', time: '16:00', home: 'Ecuador', away: 'Germany', stadiumId: 'metlife' },
    ]
  },
  {
    id: 'F', name: 'Grupo F',
    teams: [
      { name: 'Netherlands', flag: '🇳🇱', code: 'NED', pot: 1 },
      { name: 'Japan', flag: '🇯🇵', code: 'JPN', pot: 2 },
      { name: 'Sweden', flag: '🇸🇪', code: 'SWE', pot: 3 },
      { name: 'Tunisia', flag: '🇹🇳', code: 'TUN', pot: 4 },
    ],
    matches: [
      { id: 10, date: '2026-06-14', time: '16:00', home: 'Netherlands', away: 'Japan', stadiumId: 'att' },
      { id: 12, date: '2026-06-14', time: '22:00', home: 'Sweden', away: 'Tunisia', stadiumId: 'bbva' },
      { id: 33, date: '2026-06-20', time: '13:00', home: 'Netherlands', away: 'Sweden', stadiumId: 'nrg' },
      { id: 36, date: '2026-06-21', time: '00:00', home: 'Tunisia', away: 'Japan', stadiumId: 'bbva' },
      { id: 57, date: '2026-06-25', time: '19:00', home: 'Japan', away: 'Sweden', stadiumId: 'att' },
      { id: 58, date: '2026-06-25', time: '19:00', home: 'Tunisia', away: 'Netherlands', stadiumId: 'arrowhead' },
    ]
  },
  {
    id: 'G', name: 'Grupo G',
    teams: [
      { name: 'Belgium', flag: '🇧🇪', code: 'BEL', pot: 1 },
      { name: 'Iran', flag: '🇮🇷', code: 'IRN', pot: 2 },
      { name: 'Egypt', flag: '🇪🇬', code: 'EGY', pot: 3 },
      { name: 'New Zealand', flag: '🇳🇿', code: 'NZL', pot: 4 },
    ],
    matches: [
      { id: 14, date: '2026-06-15', time: '15:00', home: 'Belgium', away: 'Egypt', stadiumId: 'lumen' },
      { id: 16, date: '2026-06-15', time: '21:00', home: 'Iran', away: 'New Zealand', stadiumId: 'sofi' },
      { id: 38, date: '2026-06-21', time: '15:00', home: 'Belgium', away: 'Iran', stadiumId: 'sofi' },
      { id: 40, date: '2026-06-21', time: '21:00', home: 'New Zealand', away: 'Egypt', stadiumId: 'bcplace' },
      { id: 65, date: '2026-06-26', time: '23:00', home: 'Egypt', away: 'Iran', stadiumId: 'lumen' },
      { id: 66, date: '2026-06-26', time: '23:00', home: 'New Zealand', away: 'Belgium', stadiumId: 'bcplace' },
    ]
  },
  {
    id: 'H', name: 'Grupo H',
    teams: [
      { name: 'Spain', flag: '🇪🇸', code: 'ESP', pot: 1 },
      { name: 'Uruguay', flag: '🇺🇾', code: 'URU', pot: 2 },
      { name: 'Saudi Arabia', flag: '🇸🇦', code: 'KSA', pot: 3 },
      { name: 'Cape Verde', flag: '🇨🇻', code: 'CPV', pot: 4 },
    ],
    matches: [
      { id: 13, date: '2026-06-15', time: '12:00', home: 'Spain', away: 'Cape Verde', stadiumId: 'mercedesbenz' },
      { id: 15, date: '2026-06-15', time: '18:00', home: 'Saudi Arabia', away: 'Uruguay', stadiumId: 'hardrock' },
      { id: 37, date: '2026-06-21', time: '12:00', home: 'Spain', away: 'Saudi Arabia', stadiumId: 'mercedesbenz' },
      { id: 39, date: '2026-06-21', time: '18:00', home: 'Uruguay', away: 'Cape Verde', stadiumId: 'hardrock' },
      { id: 63, date: '2026-06-26', time: '20:00', home: 'Cape Verde', away: 'Saudi Arabia', stadiumId: 'nrg' },
      { id: 64, date: '2026-06-26', time: '20:00', home: 'Uruguay', away: 'Spain', stadiumId: 'akron' },
    ]
  },
  {
    id: 'I', name: 'Grupo I',
    teams: [
      { name: 'France', flag: '🇫🇷', code: 'FRA', pot: 1 },
      { name: 'Senegal', flag: '🇸🇳', code: 'SEN', pot: 2 },
      { name: 'Norway', flag: '🇳🇴', code: 'NOR', pot: 3 },
      { name: 'Iraq', flag: '🇮🇶', code: 'IRQ', pot: 4 },
    ],
    matches: [
      { id: 17, date: '2026-06-16', time: '15:00', home: 'France', away: 'Senegal', stadiumId: 'metlife' },
      { id: 18, date: '2026-06-16', time: '18:00', home: 'Iraq', away: 'Norway', stadiumId: 'gillette' },
      { id: 42, date: '2026-06-22', time: '17:00', home: 'France', away: 'Iraq', stadiumId: 'lincoln' },
      { id: 43, date: '2026-06-22', time: '20:00', home: 'Norway', away: 'Senegal', stadiumId: 'metlife' },
      { id: 61, date: '2026-06-26', time: '15:00', home: 'Norway', away: 'France', stadiumId: 'gillette' },
      { id: 62, date: '2026-06-26', time: '15:00', home: 'Senegal', away: 'Iraq', stadiumId: 'bmofield' },
    ]
  },
  {
    id: 'J', name: 'Grupo J',
    teams: [
      { name: 'Argentina', flag: '🇦🇷', code: 'ARG', pot: 1 },
      { name: 'Austria', flag: '🇦🇹', code: 'AUT', pot: 2 },
      { name: 'Algeria', flag: '🇩🇿', code: 'ALG', pot: 3 },
      { name: 'Jordan', flag: '🇯🇴', code: 'JOR', pot: 4 },
    ],
    matches: [
      { id: 19, date: '2026-06-16', time: '21:00', home: 'Argentina', away: 'Algeria', stadiumId: 'arrowhead' },
      { id: 20, date: '2026-06-17', time: '00:00', home: 'Austria', away: 'Jordan', stadiumId: 'levis' },
      { id: 41, date: '2026-06-22', time: '13:00', home: 'Argentina', away: 'Austria', stadiumId: 'att' },
      { id: 44, date: '2026-06-22', time: '23:00', home: 'Jordan', away: 'Algeria', stadiumId: 'levis' },
      { id: 71, date: '2026-06-27', time: '22:00', home: 'Algeria', away: 'Austria', stadiumId: 'arrowhead' },
      { id: 72, date: '2026-06-27', time: '22:00', home: 'Jordan', away: 'Argentina', stadiumId: 'att' },
    ]
  },
  {
    id: 'K', name: 'Grupo K',
    teams: [
      { name: 'Portugal', flag: '🇵🇹', code: 'POR', pot: 1 },
      { name: 'Colombia', flag: '🇨🇴', code: 'COL', pot: 2 },
      { name: 'Uzbekistan', flag: '🇺🇿', code: 'UZB', pot: 3 },
      { name: 'DR Congo', flag: '🇨🇩', code: 'COD', pot: 4 },
    ],
    matches: [
      { id: 21, date: '2026-06-17', time: '13:00', home: 'Portugal', away: 'DR Congo', stadiumId: 'nrg' },
      { id: 24, date: '2026-06-17', time: '22:00', home: 'Uzbekistan', away: 'Colombia', stadiumId: 'azteca' },
      { id: 45, date: '2026-06-23', time: '13:00', home: 'Portugal', away: 'Uzbekistan', stadiumId: 'nrg' },
      { id: 48, date: '2026-06-23', time: '22:00', home: 'Colombia', away: 'DR Congo', stadiumId: 'akron' },
      { id: 69, date: '2026-06-27', time: '19:30', home: 'Colombia', away: 'Portugal', stadiumId: 'hardrock' },
      { id: 70, date: '2026-06-27', time: '19:30', home: 'DR Congo', away: 'Uzbekistan', stadiumId: 'mercedesbenz' },
    ]
  },
  {
    id: 'L', name: 'Grupo L',
    teams: [
      { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: 'ENG', pot: 1 },
      { name: 'Croatia', flag: '🇭🇷', code: 'CRO', pot: 2 },
      { name: 'Ghana', flag: '🇬🇭', code: 'GHA', pot: 3 },
      { name: 'Panama', flag: '🇵🇦', code: 'PAN', pot: 4 },
    ],
    matches: [
      { id: 22, date: '2026-06-17', time: '16:00', home: 'England', away: 'Croatia', stadiumId: 'att' },
      { id: 23, date: '2026-06-17', time: '19:00', home: 'Ghana', away: 'Panama', stadiumId: 'bmofield' },
      { id: 46, date: '2026-06-23', time: '16:00', home: 'England', away: 'Ghana', stadiumId: 'gillette' },
      { id: 47, date: '2026-06-23', time: '19:00', home: 'Panama', away: 'Croatia', stadiumId: 'bmofield' },
      { id: 67, date: '2026-06-27', time: '17:00', home: 'Panama', away: 'England', stadiumId: 'metlife' },
      { id: 68, date: '2026-06-27', time: '17:00', home: 'Croatia', away: 'Ghana', stadiumId: 'lincoln' },
    ]
  },
]

const stadiums = [
  { id: 'azteca', name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', code: 'MEX', capacity: 83000, lat: 19.3028, lng: -99.1508 },
  { id: 'akron', name: 'Estadio Akron', city: 'Guadalajara', country: 'Mexico', code: 'MEX', capacity: 48000, lat: 20.6817, lng: -103.4631 },
  { id: 'bbva', name: 'Estadio BBVA', city: 'Monterrey', country: 'Mexico', code: 'MEX', capacity: 53500, lat: 25.6691, lng: -100.2446 },
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Angeles', country: 'United States', code: 'USA', capacity: 70000, lat: 33.9534, lng: -118.3394 },
  { id: 'levis', name: "Levi's Stadium", city: 'San Francisco', country: 'United States', code: 'USA', capacity: 71000, lat: 37.4033, lng: -121.9698 },
  { id: 'lumen', name: 'Lumen Field', city: 'Seattle', country: 'United States', code: 'USA', capacity: 69000, lat: 47.5951, lng: -122.3319 },
  { id: 'att', name: 'AT&T Stadium', city: 'Dallas', country: 'United States', code: 'USA', capacity: 94000, lat: 32.7481, lng: -97.0932 },
  { id: 'nrg', name: 'NRG Stadium', city: 'Houston', country: 'United States', code: 'USA', capacity: 72000, lat: 29.6847, lng: -95.4110 },
  { id: 'arrowhead', name: 'Arrowhead Stadium', city: 'Kansas City', country: 'United States', code: 'USA', capacity: 73000, lat: 39.0489, lng: -94.4845 },
  { id: 'mercedesbenz', name: 'Mercedes-Benz Stadium', city: 'Atlanta', country: 'United States', code: 'USA', capacity: 75000, lat: 33.7554, lng: -84.4014 },
  { id: 'metlife', name: 'MetLife Stadium', city: 'New York/New Jersey', country: 'United States', code: 'USA', capacity: 82500, lat: 40.8135, lng: -74.0750 },
  { id: 'gillette', name: 'Gillette Stadium', city: 'Boston', country: 'United States', code: 'USA', capacity: 65000, lat: 42.0908, lng: -71.2644 },
  { id: 'lincoln', name: 'Lincoln Financial Field', city: 'Philadelphia', country: 'United States', code: 'USA', capacity: 69000, lat: 39.9013, lng: -75.1679 },
  { id: 'hardrock', name: 'Hard Rock Stadium', city: 'Miami', country: 'United States', code: 'USA', capacity: 65000, lat: 25.9578, lng: -80.2393 },
  { id: 'bmofield', name: 'BMO Field', city: 'Toronto', country: 'Canada', code: 'CAN', capacity: 45000, lat: 43.6331, lng: -79.4190 },
  { id: 'bcplace', name: 'BC Place', city: 'Vancouver', country: 'Canada', code: 'CAN', capacity: 54000, lat: 49.2766, lng: -123.1126 },
]

const hostCountries = [
  { name: 'Canada', flag: '🇨🇦', code: 'CAN', lat: 56.1304, lng: -106.3468 },
  { name: 'United States', flag: '🇺🇸', code: 'USA', lat: 37.0902, lng: -95.7129 },
  { name: 'Mexico', flag: '🇲🇽', code: 'MEX', lat: 23.6345, lng: -102.5528 },
]

const allMatches = groups.flatMap(g => g.matches.map(m => ({ ...m, group: g.id })))

function getStadium(id) { return stadiums.find(s => s.id === id) }

const isoMap = {
  MEX:'mx', KOR:'kr', RSA:'za', CZE:'cz',
  CAN:'ca', SUI:'ch', QAT:'qa', BIH:'ba',
  BRA:'br', MAR:'ma', HAI:'ht', USA:'us',
  AUS:'au', PAR:'py', TUR:'tr', GER:'de',
  ECU:'ec', CIV:'ci', CUW:'cw', NED:'nl',
  JPN:'jp', SWE:'se', TUN:'tn', BEL:'be',
  IRN:'ir', EGY:'eg', NZL:'nz', ESP:'es',
  URU:'uy', KSA:'sa', CPV:'cv', FRA:'fr',
  SEN:'sn', NOR:'no', IRQ:'iq', ARG:'ar',
  AUT:'at', ALG:'dz', JOR:'jo', POR:'pt',
  COL:'co', UZB:'uz', COD:'cd', CRO:'hr',
  GHA:'gh', PAN:'pa',
}

function getFlagUrl(code) {
  if (code === 'SCO') return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/32px-Flag_of_Scotland.svg.png'
  if (code === 'ENG') return 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/32px-Flag_of_England.svg.png'
  return `https://flagcdn.com/32x24/${isoMap[code] || 'xx'}.png`
}

export { groups, stadiums, hostCountries, allMatches, getStadium, getFlagUrl }
