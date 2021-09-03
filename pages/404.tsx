import Head from 'next/head';

import BlogNavBar from '../components/BlogNavBar';
import BlogFooter from '../components/BlogFooter';

const Error404 = () => {
    return (
        <div>
            <Head>
                <title>404 - Harry Yep&apos;s Blog | Harrly</title>
            </Head>

            <div id='notion-blog-404' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div id='notion-blog-404-content' className='mx-auto flex flex-grow leading-10'>
                    <div className='container mx-auto flex flex-col justify-center text-center'>
                        <h1 className='text-4xl font-bold'>404 Not Found</h1>
                        <p>This page does not exist.</p>
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default Error404;