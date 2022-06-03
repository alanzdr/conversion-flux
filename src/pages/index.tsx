import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

import Contexts from 'contexts';
import Welcome from 'views/Welcome';
import Questions from 'views/Questions';
import Conclusion from 'views/Conclusion';
import Loading from 'views/Loading';
import Data from 'data/data.json';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.default,
    height: '100%',
    width: '100%',
    flex: 1,
  },
}));

const Home: React.FC = () => {
  const style = useStyles();
  const seo = Data.credetials.seo;
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <link rel="icon" href={seo.icon} />
        <meta property="og:title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta property="og:description" content={seo.description} />
        <meta name="keywords" content='Programa de Contabilidades' />
      </Head>
      <Contexts>
        <div className={style.appContainer}>
          <Welcome />
          <Conclusion />
          <Questions />
          <Loading />
        </div>
      </Contexts>
    </>
  );
};

export default Home;
