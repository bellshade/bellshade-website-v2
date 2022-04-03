const Discord = () => {
  return (
    <section
      id="home-discord"
      style={{
        background:
          'linear-gradient(173.27deg, rgba(219, 226, 252, 0.9) 5.73%, rgba(99, 127, 227, 0) 57.44%)',
      }}
    >
      <div
        className="mx-auto pt-24 text-center relative"
        style={{
          width: '90%',
          height: '650px',
        }}
      >
        <div
          className="w-32 h-32 absolute -top-16 rounded-full flex justify-center items-center text-white"
          style={{background: '#637FE3', left: 'calc(50% - 4rem)'}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>
        </div>

        <div className="mt-6">
          <h1 className="text-4xl font-medium">
            Gabung Komunitas Discord Bellshade
          </h1>

          <p className="my-5 max-w-md mx-auto">
            Bellshade dikelola dan berada di bawah naungan komunitas Web
            Programming UNPAS (WPU).
          </p>

          <a
            href="https://discord.gg/wpu"
            style={{background: '#637FE3'}}
            className="text-white py-2 px-7 rounded-lg inline-block mt-5"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Discord
