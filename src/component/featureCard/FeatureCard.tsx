const FeatureCard = ({
  image,
  badge,
  title,
  text,
}: {
  image: string;
  badge: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="relative flex flex-col items-center max-w-xs mx-auto">
      <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
        <img
          alt="HIW"
          loading="lazy"
          width="450"
          height="451"
          className="rounded-3xl"
          src={image}
        />
      </div>
      <div className="text-center mt-auto space-y-5">
        <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-indigo-100  relative">
          {badge}
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
          {text}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
