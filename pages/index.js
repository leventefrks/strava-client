import Head from 'next/head';
import { Inter } from '@next/font/google';
import Activities from '../components/Activities';
const inter = Inter({ subsets: ['latin'] });
import { getActivities } from '../lib/strava';

export const getStaticProps = async () => {
  const activities = await getActivities();
  return {
    props: {
      activities,
    },
    revalidate: 3600,
  };
};

export default function Home({ activities }) {
  return (
    <>
      <Head>
        <title>Strava client</title>
        <meta name="description" content="Strava client" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Strava</h1>
        activities: {activities}
      </main>
    </>
  );
}
