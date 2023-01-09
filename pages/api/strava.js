import { getActivities } from '../../lib/strava';

const handler = async (req, res) => {
  const response = await getActivities();

  console.log('response', response);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=1000'
  );

  return res.status(200).json({
    activities: response.activities,
  });
};

export default handler;
