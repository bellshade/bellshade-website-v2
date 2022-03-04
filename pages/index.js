import Head from "next/head";
import Navbar from "@/components/pages/home/Navbar";
import HomeHeader from "@/components/pages/home/HomeHeader";
import MemberCard from "@/components/pages/home/MemberCard";

const Home = ({ members }) => {
  return (
    <div>
      <Head>
        <title>Bellshade - Learn with Our Community</title>
      </Head>
      <Navbar />
      <HomeHeader />
      <section
        id="team"
        className="max-w-[942px] m-auto"
        style={{ width: "90%" }}
      >
        <div className="w-full mb-16 md:mb-20 text-center">
          <h2 className="text-5xl md:text-[67px] font-bold">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {members.map((member) => {
            return <MemberCard key={member.login} {...member} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const BellshadeAPI = "https://api.bellshade.org/";
  const getContents = (url) => fetch(url).then((res) => res.json());

  const getPublicMembers = await getContents(BellshadeAPI);

  return {
    props: {
      members: getPublicMembers,
    },
  };
}
