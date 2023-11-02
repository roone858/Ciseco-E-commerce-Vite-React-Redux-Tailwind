import ClientQuote from "../clientQuotes/ClientQuote";
import SwiperGlide from "../swiper/SwiperGlide";
import quotation from "../../assets/quotation.webp";
import quotation2 from "../../assets/quotation2.webp";
import clientSayMain from "../../assets/clientSayMain.webp";
const ClientSection = () => {
  return (
    <div className="SectionClientSay relative flow-root mt-32 ">
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
          <div className="flex flex-col items-center text-center w-full mx-auto">
            <h2 className="justify-center text-3xl md:text-4xl font-semibold">
              Good news from far away 🥇
            </h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              Let's see what people think of Ciseco
            </span>
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          width="126"
          height="120"
          className="mx-auto"
          src={clientSayMain}
        />
        <div className="mt-12 lg:mt-16 relative ">
          <img
            alt=""
            loading="lazy"
            width="52"
            height="45"
            decoding="async"
            data-nimg="1"
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotation}
          />
          <img
            alt=""
            loading="lazy"
            width="52"
            height="45"
            decoding="async"
            data-nimg="1"
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotation2}
          />

          <SwiperGlide
            handleSwiper={() => {}}
            slidesPerView={1}
            cards={[<ClientQuote />, <ClientQuote />, <ClientQuote />]}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
