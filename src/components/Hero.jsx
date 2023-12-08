/* eslint-disable react/prop-types */
import "../css/stylecss.module.css";
import styles from "../css/styles";

const Hero = () => {
  return (
    <section>
      <div className="mt-[3rem]" color="white">
        <div className="flex flex-col">
          {" "}
          <h1
            className="font-[poppins] text-[10px] xs:text-[35px] ss:text-[40px] sm:text-[48px] font-semibold text-[#fff]"
            style={{ color: "#ffffff" }}
          >
            WORSHIP WITH ME
          </h1>
          <h1
            className="font-[poppins] text-[25px] xs:text-[35px] ss:text-[40px] sm:text-[48px] font-semibold"
            style={{ color: "#ffffff" }}
          >
            SECOND FAMILY
          </h1>
          <div className="flex justify-between mt-[2rem]">
            <button className={`${styles.btn__header}`}>JOIN</button>
            <button className={`${styles.btn__header}`}>WATCH</button>
            <button className={`${styles.btn__header}`}>GIVE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
