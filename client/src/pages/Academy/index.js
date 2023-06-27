import React from "react";
import CourseOutline from "../../components/CourseOutline";
import { homeObjOne, homeObjTwo } from "../../components/Offers/Data";
import OffersInfoSection from "../../components/Offers/OffersInfoSection";
import OffersNav from "../../components/Offers/OffersNav";
import OffersSection from "../../components/Offers/OffersSection";

const Academy = () => {
  return (
    <>
      <OffersNav />
      <OffersSection />
      <OffersInfoSection {...homeObjOne} />
      <OffersInfoSection {...homeObjTwo} />
      <CourseOutline />
    </>
  );
};

export default Academy;
