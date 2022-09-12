export const IconMediaLink = ({
  href,
  SVGComp,
  name,
}: {
  href: string;
  SVGComp: any;
  name: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="my-4 flex items-center text-brand hover:text-gray-600 transition-all"
    >
      {SVGComp}
      {name}
    </a>
  );
};
