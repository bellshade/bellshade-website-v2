import Navbar from "@/components/pages/home/Navbar";
import Head from "next/head";
import HomeHeader from "@/components/pages/home/HomeHeader";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Bellshade - Learn with Our Community</title>
      </Head>
      <HomeHeader />
    </div>
  );
};

export default Home;
