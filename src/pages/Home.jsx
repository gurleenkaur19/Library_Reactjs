import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";

const sliderContent = [
  { title: "Books We Love" },
  { title: "Browse By subject" },
  { title: "Kids" },
  { title: "Romance" },
  { title: "Thrillers" },
];

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Wrapper />
      {sliderContent.map((slider, index) => (
        <Slider key={index} title={slider.title} />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
