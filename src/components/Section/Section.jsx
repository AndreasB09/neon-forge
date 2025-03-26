import styles from './Section.module.css';

const Section = ({ title, text, image, imageFirst = false }) => {
    return (
        <div className={styles.section}>
            {imageFirst ? (
                <>
                    <img src={image} alt={title} />
                    <div className={styles.textContainer}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.textContainer}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <img src={image} alt={title} />
                </>
            )}
        </div>
    );
};

export default Section;
