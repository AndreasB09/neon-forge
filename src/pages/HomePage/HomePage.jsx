import styles from './HomePage.module.css';
import Section from '../../components/Section/Section.jsx';

import ImageOne from '../../assets/images/border_one.jpg';
import ImageTwo from '../../assets/images/border_two.jpg';
import ImageThree from '../../assets/images/border_three.jpg';


const HomePage = () => {
    return (
        <div className={styles.HomePage}>
            
            <Section 
                title="First Section" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                image={ImageOne} 
            />
            <Section 
                title="Second Section" 
                text="Voluptatibus doloremque, molestias eos sed, eum sapiente necessitatibus." 
                image={ImageTwo}
                imageFirst={true}
            />
            <Section 
                title="Third Section" 
                text="Non atque quod iste iusto cupiditate eaque id esse enim." 
                image={ImageThree} 
            />
            
        </div>
    );
};

export default HomePage;