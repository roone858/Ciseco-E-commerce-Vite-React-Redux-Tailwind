
import CollectionCard from "../collectionCard/CollectionCard";
import SwiperWithHeader from "../swiperWithHeader/SwiperWithHeader";

const CollectionsSections = () => {

  return (
    <div className="my-32">
      <SwiperWithHeader
        cards={[
          <CollectionCard />,
          <CollectionCard />,
          <CollectionCard />,
          <CollectionCard />,
        ]}
        title="Chosen by our experts"
        subTitle=""
        slidesPerView={3}
      />
    </div>
  );
};

export default CollectionsSections;
