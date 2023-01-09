import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const Activities = () => {
  const { data, error, isLoading } = useSWR('/api/strava', fetcher);

  console.log('data', data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div></div>;
};

export default Activities;
