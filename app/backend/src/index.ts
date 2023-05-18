import LeaderboardsService from './database/services/Leaderboards.service';

const funTest = async () => {
  const result = await LeaderboardsService.laederboards();
  return result;
};

funTest();
