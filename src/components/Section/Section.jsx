import GlitchText from "../GlitchText/GlitchText.jsx";
import styles from "./Section.module.css";

const Section = ({ title, text, image, imageFirst = false }) => {
  return (
    <div className={styles.section}>
      {imageFirst ? (
        <>
          <div className={styles.imageContainer}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.textContainer}>
            <h2>
              <GlitchText text={title} />
            </h2>
            <p>
              <GlitchText text={text} />
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.textContainer}>
            <h2>
              <GlitchText text={title} />
            </h2>
            <p>
              <GlitchText text={text} />
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={image} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
