import { FC } from 'react';
import blackCat from '../assets/images/blackCat.jpg';

const AboutSection: FC = () => {
    return (
        <div>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.                   
                </p>
                <button>Contact Us</button>
            </div>
            <img src={blackCat} alt='black_cat'/>
        </div>
    )

}

export default AboutSection;