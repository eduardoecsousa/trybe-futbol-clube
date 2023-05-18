const mockResultHome = [
  {
    name: 'Santos',
    totalPoints: 9,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 9,
    goalsOwn: 3,
    goalsBalance: 6,
    efficiency: 100.00
  },
  {
    name: 'Corinthians',
    totalPoints: 9,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 8,
    goalsOwn: 2,
    goalsBalance: 6,
    efficiency: 100.00
  },
  {
    name: 'Palmeiras',
    totalPoints: 7,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 10,
    goalsOwn: 5,
    goalsBalance: 5,
    efficiency: 77.78
  },
  {
    name: 'Grêmio',
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 4,
    goalsOwn: 1,
    goalsBalance: 3,
    efficiency: 100.00
  },
  {
    name: 'Real Brasília',
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 2,
    goalsOwn: 0,
    goalsBalance: 2,
    efficiency: 100.00
  },
  {
    name: 'São Paulo',
    totalPoints: 4,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 4,
    goalsOwn: 1,
    goalsBalance: 3,
    efficiency: 66.67
  },
  {
    name: 'Internacional',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 4,
    goalsOwn: 6,
    goalsBalance: -2,
    efficiency: 44.44
  },
  {
    name: 'Botafogo',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 2,
    goalsOwn: 4,
    goalsBalance: -2,
    efficiency: 44.44
  },
  {
    name: 'Ferroviária',
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 3,
    goalsOwn: 2,
    goalsBalance: 1,
    efficiency: 50.00
  },
  {
    name: 'Napoli-SC',
    totalPoints: 2,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 0,
    goalsFavor: 2,
    goalsOwn: 2,
    goalsBalance: 0,
    efficiency: 33.33
  },
  {
    name: 'Cruzeiro',
    totalPoints: 1,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 2,
    goalsOwn: 3,
    goalsBalance: -1,
    efficiency: 16.67
  },
  {
    name: 'Flamengo',
    totalPoints: 1,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 2,
    goalsBalance: -1,
    efficiency: 16.67
  },
  {
    name: 'Minas Brasília',
    totalPoints: 1,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 2,
    goalsFavor: 3,
    goalsOwn: 6,
    goalsBalance: -3,
    efficiency: 11.11
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 1,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 2,
    goalsFavor: 3,
    goalsOwn: 7,
    goalsBalance: -4,
    efficiency: 11.11
  },
  {
    name: 'São José-SP',
    totalPoints: 0,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 3,
    goalsFavor: 2,
    goalsOwn: 5,
    goalsBalance: -3,
    efficiency: 0.00
  },
  {
    name: 'Bahia',
    totalPoints: 0,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 3,
    goalsFavor: 0,
    goalsOwn: 4,
    goalsBalance: -4,
    efficiency: 0.00
  }
]

const mockResultAway = [
  {
    name: 'Palmeiras',
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 7,
    goalsOwn: 0,
    goalsBalance: 7,
    efficiency: 100.00
  },
  {
    name: 'Corinthians',
    totalPoints: 6,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 6,
    goalsOwn: 2,
    goalsBalance: 4,
    efficiency: 66.67
  },
  {
    name: 'Internacional',
    totalPoints: 6,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 4,
    goalsOwn: 2,
    goalsBalance: 2,
    efficiency: 66.67
  },
  {
    name: 'São José-SP',
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 3,
    goalsOwn: 1,
    goalsBalance: 2,
    efficiency: 100.00
  },
  {
    name: 'São Paulo',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 5,
    goalsOwn: 5,
    goalsBalance: 0,
    efficiency: 44.44
  },
  {
    name: 'Ferroviária',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 4,
    goalsOwn: 5,
    goalsBalance: -1,
    efficiency: 44.44
  },
  {
    name: 'Real Brasília',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 3,
    goalsOwn: 4,
    goalsBalance: -1,
    efficiency: 44.44
  },
  {
    name: 'Grêmio',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 5,
    goalsOwn: 7,
    goalsBalance: -2,
    efficiency: 44.44
  },
  {
    name: 'Flamengo',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 3,
    goalsBalance: -2,
    efficiency: 44.44
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 1,
    goalsBalance: 0,
    efficiency: 50.00
  },
  {
    name: 'Cruzeiro',
    totalPoints: 3,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 2,
    goalsFavor: 6,
    goalsOwn: 7,
    goalsBalance: -1,
    efficiency: 33.33
  },
  {
    name: 'Santos',
    totalPoints: 2,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 0,
    goalsFavor: 3,
    goalsOwn: 3,
    goalsBalance: 0,
    efficiency: 33.33
  },
  {
    name: 'Bahia',
    totalPoints: 2,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 0,
    goalsFavor: 2,
    goalsOwn: 2,
    goalsBalance: 0,
    efficiency: 33.33
  },
  {
    name: 'Minas Brasília',
    totalPoints: 1,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 3,
    goalsBalance: -2,
    efficiency: 16.67
  },
  {
    name: 'Botafogo',
    totalPoints: 0,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 2,
    goalsFavor: 1,
    goalsOwn: 4,
    goalsBalance: -3,
    efficiency: 0.00
  },
  {
    name: 'Napoli-SC',
    totalPoints: 0,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 3,
    goalsFavor: 1,
    goalsOwn: 10,
    goalsBalance: -9,
    efficiency: 0.00
  }
]

const mockResultAll = [
  {
    efficiency: '83.33',
    goalsBalance: 10,
    goalsFavor: 14,
    goalsOwn: 4,
    name: 'Corinthians',
    totalDraws: 0,
    totalGames: 6,
    totalLosses: 1,
    totalPoints: 15,
    totalVictories: 5,
  },
  {
    efficiency: '86.67',
    goalsBalance: 12,
    goalsFavor: 17,
    goalsOwn: 5,
    name: 'Palmeiras',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 0,
    totalPoints: 13,
    totalVictories: 4,
  },
  {
    efficiency: '73.33',
    goalsBalance: 6,
    goalsFavor: 12,
    goalsOwn: 6,
    name: 'Santos',
    totalDraws: 2,
    totalGames: 5,
    totalLosses: 0,
    totalPoints: 11,
    totalVictories: 3,
  },
  {
    efficiency: '66.67',
    goalsBalance: 1,
    goalsFavor: 9,
    goalsOwn: 8,
    name: 'Grêmio',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 1,
    totalPoints: 10,
    totalVictories: 3,
  },
  {
    efficiency: '66.67',
    goalsBalance: 1,
    goalsFavor: 5,
    goalsOwn: 4,
    name: 'Real Brasília',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 1,
    totalPoints: 10,
    totalVictories: 3,
  },
  {
    efficiency: '55.56',
    goalsBalance: 0,
    goalsFavor: 8,
    goalsOwn: 8,
    name: 'Internacional',
    totalDraws: 1,
    totalGames: 6,
    totalLosses: 2,
    totalPoints: 10,
    totalVictories: 3,
  },
  {
    efficiency: '53.33',
    goalsBalance: 3,
    goalsFavor: 9,
    goalsOwn: 6,
    name: 'São Paulo',
    totalDraws: 2,
    totalGames: 5,
    totalLosses: 1,
    totalPoints: 8,
    totalVictories: 2,
  },
  {
    efficiency: '46.67',
    goalsBalance: 0,
    goalsFavor: 7,
    goalsOwn: 7,
    name: 'Ferroviária',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 2,
    totalPoints: 7,
    totalVictories: 2,
  },
  {
    efficiency: '40.00',
    goalsBalance: -1,
    goalsFavor: 5,
    goalsOwn: 6,
    name: 'São José-SP',
    totalDraws: 0,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 6,
    totalVictories: 2,
  },
  {
    efficiency: '33.33',
    goalsBalance: -3,
    goalsFavor: 2,
    goalsOwn: 5,
    name: 'Flamengo',
    totalDraws: 2,
    totalGames: 5,
    totalLosses: 2,
    totalPoints: 5,
    totalVictories: 1,
  },
  {
    efficiency: '26.67',
    goalsBalance: -2,
    goalsFavor: 8,
    goalsOwn: 10,
    name: 'Cruzeiro',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 4,
    totalVictories: 1,
  },
  {
    efficiency: '26.67',
    goalsBalance: -4,
    goalsFavor: 4,
    goalsOwn: 8,
    name: 'Avaí/Kindermann',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 4,
    totalVictories: 1,
  },
  {
    efficiency: '26.67',
    goalsBalance: -5,
    goalsFavor: 3,
    goalsOwn: 8,
    name: 'Botafogo',
    totalDraws: 1,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 4,
    totalVictories: 1,
  },
  {
    efficiency: '13.33',
    goalsBalance: -4,
    goalsFavor: 2,
    goalsOwn: 6,
    name: 'Bahia',
    totalDraws: 2,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 2,
    totalVictories: 0,
  },
  {
    efficiency: '13.33',
    goalsBalance: -5,
    goalsFavor: 4,
    goalsOwn: 9,
    name: 'Minas Brasília',
    totalDraws: 2,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 2,
    totalVictories: 0,
  },
  {
    efficiency: '13.33',
    goalsBalance: -9,
    goalsFavor: 3,
    goalsOwn: 12,
    name: 'Napoli-SC',
    totalDraws: 2,
    totalGames: 5,
    totalLosses: 3,
    totalPoints: 2,
    totalVictories: 0,
  }
]

export {mockResultHome, mockResultAway, mockResultAll};