import React, { useState } from "react";
ContentWrapper
//import "./Trending.scss"
import SwitchTap from "../../../Components/SwitchTabs/SwitchTap";
import useFetch from "../../../hooks/useFetch";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
const [endpoint,setEndpoint]=useState("day");
const {data,loading}=useFetch(`/trending/all/${endpoint}`)

  const onTabChange = (tab) => {
    setEndpoint(tab==="Day" ?"day":"week")
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTap data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
<Carousel data={data ?.results} loading={loading}/>


    </div>
  );
};

export default Trending;
