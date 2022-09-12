import { NewsletterSignup } from "../components/NewsletterSignup";

const Articles = () => {
  return (
    <div className="justify-between md:w-3/4 md:px-8 px-4 md:overflow-y-scroll md:h-[90vh] h-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800">
      <main style={{ animation: "fadeIn 0.2s" }}>
        <h1 className="text-3xl font-bold">🚀 Articles</h1>
        <p className="mt-4">
          A collection of notes, articles, thoughts, and anything else I wanted
          to write down and put out there for others to enjoy.
        </p>
        <NewsletterSignup />
      </main>
    </div>
  );
};

export default Articles;
