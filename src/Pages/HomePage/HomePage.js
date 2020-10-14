import React from 'react';
import Header from './Header/Header';
import Companies from './Companies/Companies';
import OurServices from './OurServices/OurServices';
import OurWorks from './OurWorks/OurWorks';
import Review from './Review/Review';
import Contact from './Contact/Contact';

const HomePage = () => {
    return (
        <main>
            <Header />
            <Companies />
            <OurServices />
            <OurWorks />
            <Review />
            <Contact />
        </main>
    );
};

export default HomePage;