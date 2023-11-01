import feature1 from "../../assets/HIW1img.webp";
import feature2 from "../../assets/HIW2img.webp";
import feature3 from "../../assets/HIW3img.webp";
import feature4 from "../../assets/HIW3img.webp";
import FeatureCard from "../featureCard/FeatureCard";
const FeaturesSection = () => {
  return (
    <div className="py-24   lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
        <FeatureCard
          image={feature1}
          badge="step 1"
          title="Filter & Discover"
          text="Smart filtering and suggestions make it easy to find"
        />
        <FeatureCard
          image={feature2}
          badge="step 2"
          title="Add to bag"
          text="Easily select the correct items and add them to the cart"
        />
        <FeatureCard
          image={feature3}
          badge="step 3"
          title="Fast shipping"
          text="The carrier will confirm and ship quickly to you"
        />
        <FeatureCard
          image={feature4}
          badge="step 4"
          title="Enjoy the product"
          text="Have fun and enjoy your 5-star quality products"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
