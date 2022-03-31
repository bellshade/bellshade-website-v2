import Head from "next/head";
import shared from "@bellshade/shared";
import Navbar from "@/components/pages/home/Navbar";
import HomeHeader from "@/components/pages/home/HomeHeader";
import OurTeam from "@/components/pages/home/OurTeam";

const Home = ({ members }) => {
  return (
    <div>
      <Head>
        <title>Bellshade - Learn with Our Community</title>
      </Head>
      <Navbar />
      <HomeHeader />
      <OurTeam members={members} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const BellshadeAPI = "https://api.bellshade.org/";
  const getContents = (url) => fetch(url).then((res) => res.json());

  const getPublicMembers = await getContents(BellshadeAPI);
  const EXPIRY_TTL_API = shared.constant.EXPIRY_TTL.contributors;

  return {
    props: {
      members: getPublicMembers,
    },
    revalidate: EXPIRY_TTL_API,
  };
}
