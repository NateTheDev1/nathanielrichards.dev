const Experience = () => {
  return (
    <div className="justify-between md:w-3/4 md:px-8 px-4 md:overflow-y-scroll md:h-[90vh] h-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800">
      <main style={{ animation: "fadeIn 0.2s" }}>
        <h1 className="text-3xl font-bold">🔨 Work Experience</h1>
        <p className="mt-4">My professional work experience condensed.</p>
        <div className="flex flex-col mt-8">
          <a
            href="https://clockworklabs.io/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex flex-col items-center rounded-lg border shadow-md  mb-12 border-gray-700 bg-gray-800 hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-md:rounded-none md:rounded-l-lg"
              src="https://i.gyazo.com/f4dedf24125d0a76a0d005df16fd7629.png"
              alt="Clockwork Labs"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                Clockwork Labs
              </h5>
              <p className="mt-4 font-normal text-gray-400">
                Working on both internal and external products. Working across
                teams to both provide a web front for the game BitCraft as well
                as other products produced by Clockwork Labs
              </p>
              <h5 className="mb-4 mt-6 text-xl font-bold tracking-tight text-white">
                Technologies
              </h5>
              <ul className="grid grid-cols-2 md:grid-cols-3 items-center">
                <li className="py-2">React</li>
                <li className="py-2">Express</li>
                <li className="py-2">Node</li>
                <li className="py-2">Docker</li>
                <li className="py-2">Styled Components</li>
                <li className="py-2">Typescript</li>
                <li className="py-2">Docker</li>
                <li className="py-2">Kubernetes</li>
              </ul>
            </div>
          </a>
          <a
            href="https://biggby.com"
            target="_blank"
            className="flex flex-col items-center rounded-lg border shadow-md   border-gray-700 bg-gray-800 hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-md:rounded-none md:rounded-l-lg"
              src="https://i.gyazo.com/bde4573ef15dd19e33f8905c05939f97.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                BIGGBY COFFEE ®
              </h5>
              <p className="mt-4 font-normal text-gray-400">
                Working at BIGGBY COFFEE I work on all aspects of technology.
                From ecommerce web projects, to the point of sale systems used
                by hundreds of stores across the United States everyday. In
                these projects I have worked on the server side, the frontend,
                quality assurance, and more. More information is available upon
                request.
              </p>
              <h5 className="mb-4 mt-6 text-xl font-bold tracking-tight text-white">
                Technologies
              </h5>
              <ul className="grid grid-cols-2 md:grid-cols-3 items-center">
                <li className="py-2">React</li>
                <li className="py-2">Apollo Client</li>
                <li className="py-2">Apollo Server</li>
                <li className="py-2">MySQL</li>
                <li className="py-2">Express</li>
                <li className="py-2">Node</li>
                <li className="py-2">Typescript</li>
                <li className="py-2">Bootstrap</li>
                <li className="py-2">Stripe</li>
                <li className="py-2">C++</li>
                <li className="py-2">QTCreator</li>
              </ul>
            </div>
          </a>
          <a
            href="https://mhvillage.com"
            rel="noopener noreferrer"
            target="_blank"
            className="flex flex-col items-center rounded-lg border shadow-md  mt-12 border-gray-700 bg-gray-800 hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-md:rounded-none md:rounded-l-lg"
              src="https://i.gyazo.com/abb0779ac9de5d98ee7e0b082e158516.jpg"
              alt="MHVillage"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                MHVillage
              </h5>
              <p className="mt-4 font-normal text-gray-400">
                Worked and maintained a customer focused site focusing on speed
                and usability. Also worked on customer service tools and other
                software.
              </p>
              <h5 className="mb-4 mt-6 text-xl font-bold tracking-tight text-white">
                Technologies
              </h5>
              <ul className="grid grid-cols-2 md:grid-cols-3 items-center">
                <li className="py-2">AngularJS</li>
                <li className="py-2">PHP</li>
                <li className="py-2">Docker</li>
                <li className="py-2">Bootstrap</li>
                <li className="py-2">Adsense Tools</li>
                <li className="py-2">Translations</li>
                <li className="py-2">Accessability</li>
                <li className="py-2">SQL</li>
              </ul>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Experience;
