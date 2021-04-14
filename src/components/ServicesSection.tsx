import { FC } from 'react';
import { FaHome, FaHandHoldingHeart, FaGrinHearts, FaPaw } from 'react-icons/fa'
import diversity from '../assets/images/diversity.jpg';


const ServicesSection: FC = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FaHome size={30}/>
                            <h3>Homecare</h3>
                        </div>
                        <p>we can come to your house to take care of your pet in the comfort and safety of your home.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaHandHoldingHeart size={30} />
                            <h3>Mobile ICU services</h3>
                        </div>
                        <p>We have emergency services that will promptly attend to your pet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaPaw size={30} />
                            <h3>Diversity</h3>
                        </div>
                        <p>We have the best professionals from the most diverse areas and who serve the most diverse animals.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaGrinHearts size={30} />
                            <h3>We love all the animals</h3>
                        </div>
                        <p>Our great love is for animals, here we care and love everyone!</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={diversity} alt='we_love_diversity' />
            </div>
        </div>
    )

}

export default ServicesSection;