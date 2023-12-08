import ManImage from "../assets/images/Man.jpg";
import WomanImage from "../assets/images/Woman.jpg";

const data = [
  {
    title: "JOSH + KATIE KREHBIEL | FOUNDING PASTORS",
    details: `Josh and Katie met at the University of Northwestern where they majored in pastoral studies, business, and general ministry. They instantly connected around their hearts for intimacy with God and seeing people activated in their lives in God. Together they have three daughters and one son!\nThe Krehbiels spent time as intercessory missionaries at Every Home for Christ in Colorado Springs before coming home to Minnesota to start a film company and small group that eventually grew into what is now a thriving church community.\nJosh and Katie are passionate about seeing the Body of Christ awakened to its true identity and demystifying the Christian life for everyday believers. The Krehbiels believe they will see an end to spectator Christianity in the Church at large and are honored to be a part of the transformation!`,
    img: ManImage,
  },
  {
    title: "NICOLE PALSER | EXECUTIVE PASTOR + CREATIVE DIRECTOR",
    details: `Nicole completed her undergraduated studies at North Central University and received her M.A. from University of St Thomas. Before coming to EVERYDAY, Nicole worked in Student Development at North Central University for several years. She currently oversees our staff and pastoral team and provides leadership to the Creative department. Nicole is also the mastermind behind all of our events!\nShe is passionate about meaningful creative expression and the life transformation that comes through understanding the good news of the Gospel! She loves meeting new faces at EVERYDAY and seeing people find family!`,
    img: WomanImage,
  },
  {
    title: "BEN PETERSON | ASSOCIATE PASTOR",
    details: `Ben comes to EVERYDAY after working in both ministry and the marketplace. He, his wife Kandi, and their two children have been with EVERYDAY since its roots in the living room!\nBen currently oversees all adult ministries at EVERYDAY, including Communities, SOULCARE, and Class. He is passionate about seeing people operate confidently and joyfully in their calling! While he loves teaching and equipping leaders, his greatest goals in life are to grow in the knowledge of God and to love people well.`,
    img: ManImage,
  },
  {
    title: "DANNY + ABBY CHRISTIAN | CHILDREN’S PASTORS",
    details: `Danny and Abby are both graduates of the University of Northwestern - St. Paul with degrees in nursing, psychology, ministry and biblical studies. It was in EVERYDAY KIDS that they first met and they have enjoyed years of serving the next generation side-by-side. They currently oversee all children and family ministry for children ages Infant - 5th Grade. \nAbby and Danny are passionate about God’s heart for children and families and His desire to see people of all ages in love with Him! The Christians believe Alpha Generation is worthy of much more than childcare and are eager to serve children, families and cities as they gather around the throne of God.`,
    img: WomanImage,
  },
  {
    title: "ALEX KRUSE | YOUTH PASTOR ",
    details: `Alex and his wife Bree are natives of the Twin Cities and have a deep history in the Lord. Together, they have been involved in ministry for several years and they have previously served at Pulse + River Valley! \nAlex is passionate about helping people more clearly understand who Jesus is and seeing others realize the God who is with them in every part of the journey!`,
    img: ManImage,
  },
];

const Section = (prop) => {
  return (
    <div className="sm:w-[70vw] w-[90vw] h-full text-[#3a3a3a] gap-5 text-start flex justify-between items-start flex-col sm:flex-row  py-10 border-t-2 border-[#bdbdbd] ">
      <img
        src={prop.img}
        alt=""
        className="sm:w-[30vw] sm:h-[30vw] w-[90vw] h-[90vw] flex-none object-cover"
      />
      <div>
        <h1 className=" font-bold  ">{prop.title}</h1>
        {prop.details.split("\n").map((item, i) => (
          <p key={i} className="  ">
            {item}
            <br />
            <br />
          </p>
        ))}
      </div>
    </div>
  );
};

const Staff = () => {
  return (
    <div className="App w-screen  h-full   relative flex flex-col items-center ">
      <div className="p-10">
        <h1 className=" sm:text-[3rem] text-[2rem] text-center md:text-[4rem] font-bold font-sans ">
          EVERYDAY PASTORAL STAFF
        </h1>
      </div>
      {data.map((item, i) => {
        return (
          <Section
            key={i}
            title={item.title}
            details={item.details}
            img={item.img}
          />
        );
      })}
    </div>
  );
};

export default Staff;
