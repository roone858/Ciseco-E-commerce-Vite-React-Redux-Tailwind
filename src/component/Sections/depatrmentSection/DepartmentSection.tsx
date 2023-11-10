import React from "react";
import SwiperWithHeader from "../../swiperWithHeader/SwiperWithHeader";
import DepartmentCard from "../../Cards/departmentCard/DepartmentCard";

const DepartmentSection = () => {
  return (
    <div>
      <SwiperWithHeader
        title="Shop by department"
        subTitle=""
        cards={[
          <DepartmentCard />,
          <DepartmentCard />,
          <DepartmentCard />,
          <DepartmentCard />,
        ]}
        slidesPerView={4}
      />
    </div>
  );
};

export default DepartmentSection;
