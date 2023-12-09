// // import img from "../assets/images/istockphoto.jpg";
// // import styles from "../css/styles";

// // const Questions = () => {
// //   return (
// //     <>
// //       <section
// //         className="relative bg-cover bg-center"
// //         style={{ backgroundImage: `url(${img})` }}
// //       >
// //         <div className="bg-black bg-opacity-50 absolute inset-0"></div>
// //         <div className="container mx-auto py-[10rem] px-[7rem] text-white relative z-10">
// //           <h2 className="text-4xl font-bold mb-4">How much is</h2>
// //           <h2 className="text-4xl font-bold mb-4">a child worth?</h2>
// //           <p className="text-lg max-w-[50%]">
// //             How we value children and other vulnerable members of our community
// //             says a lot about our faith. Learn how prevalent abuse within the
// //             church is, and what you can do respond to this urgent crisis.
// //           </p>
// //           <div className="mt-[2rem]">
// //             <button
// //               className={`${styles.btn__header} bg-[#f8c933] text-[#000]`}
// //             >
// //               Common Questions
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Questions;

// import img from "../assets/images/istockphoto.jpg";
// import styles from "../css/styles";

// const Questions = () => {
//   return (
//     <>
//       <section
//         className="relative bg-cover bg-center"
//         style={{ backgroundImage: `url(${img})` }}
//       >
//         <div className="bg-black bg-opacity-50 absolute inset-0"></div>
//         <div className="container mx-auto py-10 md:py-[10rem] px-4 sm:px-6 lg:px-8 text-white relative z-10">
//           {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"> */}
//           <h2 className="font-[raleway] text-[32px] ss:text-[38px] sm:text-[40px] text-[#000] text-white">
//             How much is
//           </h2>
//           {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"> */}
//           <h2 className="font-[raleway] text-[32px] ss:text-[38px] sm:text-[40px] text-[#000] text-white">
//             a child worth?
//           </h2>
//           {/* <p className="text-base sm:text-lg md:text-lg max-w-full ss:max-w-[50%]"> */}
//           <p className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#000] text-white max-w-full sm:max-w-[50%]">
//             How we value children and other vulnerable members of our community
//             says a lot about our faith. Learn how prevalent abuse within the
//             church is, and what you can do to respond to this urgent crisis.
//           </p>
//           <div className="mt-4 sm:mt-6">
//             <button
//               className={`${styles.btn__header} bg-[#f8c933] text-[#000]`}
//             >
//               Common Questions
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Questions;

import img from "../assets/images/istockphoto.jpg";
import styles from "../css/styles";

const Questions = () => {
  return (
    <section
      className="relative bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="container mx-auto py-10 md:py-20 px-4 sm:px-6 lg:px-8 text-white relative z-10">
        <h2 className="font-[poppins] font-bold text-[25px] xs:text-[30px] sm:text-[40px] font-[700] whitespace-no-wrap">
          How much is
        </h2>
        <h2 className="font-[poppins] font-bold text-[25px] xs:text-[30px] sm:text-[40px] font-[700] whitespace-no-wrap">
          a child worth?
        </h2>
        <p className="font-[raleway] text-[16px] ss:text-[18px] sm:text-[19px] my-8 max-w-full ss:max-w-[50%]">
          How we value children and other vulnerable members of our community
          says a lot about our faith. Learn how prevalent abuse within the
          church is and what you can do to respond to this urgent crisis.
        </p>
        <div className="mt-4 sm:mt-6">
          <button
            className={`${styles.btn__header} font-[raleway] text-[16px] ss:text-[18px] sm:text-[19px] bg-[#f8c933] text-[#000]`}
          >
            Common Questions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
