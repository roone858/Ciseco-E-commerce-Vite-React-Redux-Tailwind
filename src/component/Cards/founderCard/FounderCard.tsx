const FounderCard = () => {
  return (
    <div className="max-w-sm">
      <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 object-cover"
          src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472099645785-5658abf4ff4e%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D400%26q%3D80&amp;w=3840&amp;q=75"
        />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
        Niamh O'Shea
      </h3>
      <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
        Co-founder and Chief Executive
      </span>
    </div>
  );
};

export default FounderCard;
