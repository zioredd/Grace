import styles from "../css/styles.jsx";

const CTA = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row overflow-x-hidden">
        <div className={`${styles.cta__box} bg-[#4dc3f1]`}>
          <h1 className={`${styles.cta__h1}`}>Donate Today</h1>
          <p className={`${styles.cta__p}`}>DIFFERENT WAYS TO GIVE</p>
        </div>
        <div className={`${styles.cta__box} bg-[#f4012f] `}>
          <h1 className={`${styles.cta__h1}`}>Safeguarding</h1>
          <p className={`${styles.cta__p} `}>
            LEARN HOW TO PROTEXT YOUR CHURCH
          </p>
        </div>
        <div className={`${styles.cta__box} bg-[#f7e16a] `}>
          <h1 className={`${styles.cta__h1}`}>Investigations</h1>
          <p className={`${styles.cta__p}`}>CONACT US FOR AN ASSESSMENT</p>
        </div>
      </div>
    </>
  );
};

export default CTA;
