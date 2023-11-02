import BlogCard from "../blogCard/BlogCard";
import MainBlogCard from "../mainBlogCard/MainBlogCard";

const BlogsSection = () => {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100/70 dark:bg-black/20"></div>
      <div>
        <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
          <div className="">
            <h2 className=" text-3xl md:text-4xl font-semibold">
              The latest news<span className="">. </span>
              <span className="text-neutral-500 dark:text-neutral-400">
                From the Ciseco blog
              </span>
            </h2>
          </div>
        </div>
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <MainBlogCard />
            <div className="grid gap-6 md:gap-8">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
        <div className="flex mt-16 justify-center">
          <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800  border border-slate-300 dark:border-slate-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
            Show all blog articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
