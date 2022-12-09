const Contact = () => {
  return (
    <div className="justify-between md:w-3/4 md:px-8 px-4 md:overflow-y-scroll md:h-[90vh] h-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800">
      <main style={{ animation: "fadeIn 0.2s" }}>
        <h1 className="text-3xl font-bold">📞 Contact</h1>
        <p className="mt-4">
          Just a few details if you aim to keep in touch with me.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">📧 Email</h2>
          <p className="mt-4">
            You can reach me by email at{" "}
            <a
              href="mailto:nthnlrichards@gmail.com
                    "
              className="text-blue-500"
            >
              nthnlrichards@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">📱 Phone</h2>
          <p className="mt-4">
            You can reach me by phone at{" "}
            <a href="tel:2312154678" className="text-blue-500">
              2312154678
            </a>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">LinkedIn</h2>
          <p className="mt-4">
            <a
              href="https://www.linkedin.com/in/nathaniel-richards-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://www.linkedin.com/in/nathaniel-richards-dev/
            </a>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">GitHub</h2>
          <p className="mt-4">
            <a
              href="https://github.com/NateTheDev1"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://github.com/NateTheDev1
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
