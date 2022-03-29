import Image from "next/image";

const HomeHeader = () => {
  return (
    <section id="home-header">
      <div
        className="flex flex-row mx-auto"
        style={{ width: "90%", height: "650px" }}
      >
        <div className="my-auto">
          <h1 className="grow text-4xl font-medium">
            Funky Study Coding with{" "}
            <span style={{ color: "#637FE3" }}>Bellshade</span>
          </h1>
          <p className="my-5">
            Belajar materi tentang coding, quiz, dan juga bisa belajar bareng di
            komunitas Web Programming UNPAS
          </p>
          <button
            style={{ background: "#637FE3" }}
            className="text-white py-2 px-7"
          >
            Get Started
          </button>
        </div>
        <div className="ml-10 hidden xl:block">
          <Image
            src={"/img/home-header.png"}
            alt="Home-Header-Image"
            width={"724px"}
            height={"623px"}
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
