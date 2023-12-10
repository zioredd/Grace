import Church from "../assets/images/Church.jpg";
import GroupStudy from "../assets/images/GroupStudy.jpg";
import Man from "../assets/images/Man.jpg";
import Woman from "../assets/images/Woman.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const data = [
  {
    original: GroupStudy,
    thumbnail: GroupStudy,
  },
  {
    original: Church,
    thumbnail: Church,
  },
  {
    original: Man,
    thumbnail: Man,
  },
  {
    original: Woman,
    thumbnail: Woman,
  },
];

const Services = () => {
  return (
    <>
      <div
        className={`border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white  z-[200]`}
      >
        <Navbar />
      </div>
      <div className="App w-screen   bg-[#eee]   relative pb-20 md:text-[1rem]  text-[0.9rem] ">
        <div className=" max-h-[65vh] min-h-[50vh] h-[100vw] w-[100vw]  flex  justify-center items-center overflow-hidden relative bg-black bg-opacity-10">
          <img
            src={Church}
            alt=""
            className="object-cover  w-full h-full absolute z-[0] "
          />
          <div className="bg-black absolute w-full h-full bg-opacity-30 "></div>
          <div className="absolute z-[2]  text-[3rem] sm:text-[5rem]  font-bold text-white text-center leading-none font-Poppins ">
            Safeguarding
            <br /> Intiative
          </div>
        </div>
        <div className=" w-[80vw] text-left m-auto  font-bold ">
          <div className="md:w-[80%] w-[95%] m-auto py-10 border-b-2 border-[#bda635] ">
            <h5 className="text-[#bda635] uppercase  ">Prevention tools</h5>
            <h2 className="text-[3rem]  md:w-[40vw] leading-none py-5 font-Poppins">
              Protect your faith community
            </h2>
            <div className=" flex">
              <div className="bg-[#bda635] py-1 px-4 text-white uppercase">
                Request information
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] md:w-[80vw] m-auto">
          <div className="  w-full flex  py-10 gap-10 md:flex-row flex-col">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              qui impedit sed nihil assumenda rem, inventore eum beatae dolores
              harum? Quos a maiores sequi nobis dolores. Minus unde facere natus
              voluptates itaque, quo, placeat cum, consequatur nobis asperiores
              ipsum sit. Aliquam eius numquam consequatur magni similique, odit
              ullam quos incidunt recusandae laboriosam a rem at assumenda
              placeat quisquam aspernatur autem totam deserunt. Quisquam enim
              illo asperiores aliquid quae? Beatae, odit molestiae quas
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
              velit vitae magnam corporis fuga temporibus! Veritatis,
              voluptatem. Ad minima hic aperiam nobis! Temporibus veritatis enim
              pariatur labore rerum ullam deleniti aliquid repellendus porro
              illum asperiores, explicabo amet non consequuntur dignissimos
              laudantium esse debitis necessitatibus quidem dolorum maxime sunt,
              molestiae accusamus. Ipsa aperiam, fugiat quae illo eos,
              laudantium eligendi molestias quidem ipsam cum ducimus, eaque esse
              aspernatur earum totam! Eaque veritatis rerum dolorem laudantium,
              commodi esse molestiae recusandae odio, quidem eaque!
            </p>
            <div className=" bg-[#45567] md:w-[30vw] md:h-[20vw] h-[50vw] flex-none">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
          <div className=" w-full flex  py-10 gap-10 md:flex-row flex-col">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              qui impedit sed nihil assumenda rem, inventore eum beatae dolores
              harum? Quos a maiores sequi nobis dolores. Minus unde facere natus
              voluptates itaque, quo, placeat cum, consequatur nobis asperiores
              ipsum sit. Aliquam eius numquam consequatur magni similique, odit
              ullam quos incidunt recusandae laboriosam a rem at assumenda
              placeat quisquam aspernatur autem totam deserunt. Quisquam enim
              illo asperiores aliquid quae? Beatae, odit molestiae quas
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
              velit vitae magnam corporis fuga temporibus! Veritatis,
              voluptatem. Ad minima hic aperiam nobis! Temporibus veritatis enim
              pariatur labore rerum ullam deleniti aliquid repellendus porro
              illum asperiores, explicabo amet non consequuntur dignissimos
              laudantium esse debitis necessitatibus quidem dolorum maxime sunt,
              molestiae accusamus. Ipsa aperiam, fugiat quae illo eos,
              laudantium eligendi molestias quidem ipsam cum ducimus, eaque esse
              aspernatur earum totam! Eaque veritatis rerum dolorem laudantium,
              commodi esse molestiae recusandae odio, quidem eaque!
            </p>
            <div className=" md:w-[30vw] md:h-[20vw] h-[50vw] flex-none ">
              <Carousel
                width={"100%"}
                dynamicHeight={true}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
              >
                {data.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.original}
                      alt=""
                      className="md:w-[30vw] md:h-[20vw] h-[50vw] object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
