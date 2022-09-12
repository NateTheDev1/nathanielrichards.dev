export const GoalCard = ({
  title,
  sub,
  disabled = false,
  progress = 0,
  href,
}: {
  href?: string;
  title: string;
  sub: string;
  disabled?: boolean;
  progress?: number;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`my-4 flex flex-col items-left rounded-lg border shadow-md border-gray-700 bg-gray-800 hover:bg-gray-700 ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-sm  text-gray-400">{sub}</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
            {progress}%
          </div>
        </div>
      </div>
    </a>
  );
};
