import { FC } from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs: FC = () => {
    return (
        <>
            <AboutSection />            
            <ServicesSection />
            <FaqSection />
        </>
    )
}

export default AboutUs;