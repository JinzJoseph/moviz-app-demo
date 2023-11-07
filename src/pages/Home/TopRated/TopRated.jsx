import React, { useState } from "react";

//import "./Trending.scss"
import SwitchTap from "../../../Components/SwitchTabs/SwitchTap";
import useFetch from "../../../hooks/useFetch";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
const [endpoint,setEndpoint]=useState("movie");
const {data,loading}=useFetch(`/${endpoint}/top_rated`)

  const onTabChange = (tab) => {
    setEndpoint(tab==="Movies" ?"movie":"tv")
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTap data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
<Carousel data={data ?.results}
 loading={loading}
 endpoint={endpoint}
 />


    </div>
  );
};

export default TopRated;
