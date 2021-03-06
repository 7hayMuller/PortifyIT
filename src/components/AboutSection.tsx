import { FC } from 'react';
import blackCat from '../assets/images/blackCat.jpg';
import styled from 'styled-components';

const AboutSection: FC = () => {
    return (
        <About>
            <Description>
                <div className='title'>
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={blackCat} alt='black_cat' />
            </Image>
        </About>
    )

}

const About = styled.div`
min-height:90vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:5rem 10 rem ;
color: white;
`

const Description = styled.div`
flex:1;
padding-right:5rem;
h2 {
    font-weight:lighter;
}
`;

const Image = styled.div`
flex:1;
overflow:hidden;

img {
    width:100%;
    height:90vh;
    object-fit:cover;
}
`;

const Hide = styled.div`
overflow:hidden;
`;


export default AboutSection;