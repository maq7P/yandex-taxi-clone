import Head from 'next/head';

import { APP_NAME } from '../../constants';
import FavIcon from '../../../public/images/preloader.png';

//console.log(FavIcon);

const Seo = () => (
    <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="Search car"/>
        <link rel="shortcit icon" href={FavIcon.src} type="image/png" /> 
    </Head>
);

export default Seo