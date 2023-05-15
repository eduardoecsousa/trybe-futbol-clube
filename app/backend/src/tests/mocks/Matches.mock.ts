const MockReturnFindMatches = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  }
]

const MockReturnFindMatchesFalse = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  }
];

const MockReturnFindMatchestrue = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  }
]

const objPatchMatchesGols = {
  homeTeamGoals: 3,
  awayTeamGoals: 1
}


const objPostMatches = {
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
}


const objPostMatchesTeamEqual = {
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 16,
  awayTeamGoals: 1,
}

const objPostMatchesNoExist = {
  homeTeamId: 160,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
}

const mockSuccessCreate = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: true,
}


export {
  MockReturnFindMatches,
  MockReturnFindMatchestrue,
  MockReturnFindMatchesFalse,
  objPatchMatchesGols,
  objPostMatches,
  objPostMatchesTeamEqual,
  objPostMatchesNoExist,
  mockSuccessCreate,
};