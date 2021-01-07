import Head from 'next/head';
import Layout from '../components/Layout';
import MainPage from '../components/Main';

const Main = () =>  (
    <Layout>
        <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        </Head>
        <MainPage />
    </Layout>
)

export default Main;