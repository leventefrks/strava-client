import axios from 'axios';
import queryString from 'query-string';
import { TOKEN_ENDPOINT, ATHLETES_ENDPOINT } from '../constants';

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: queryString.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const { access_token } = await response.json();

  console.log('access-token', access_token);

  return access_token;
};

export const getActivities = async () => {
  const accessToken = await getAccessToken();
  const response = await fetch(
    `${ATHLETES_ENDPOINT}/activities?access_token=${accessToken}`
  );

  console.log('accessToken', accessToken);
  const json = await response.json();

  return [];
};
