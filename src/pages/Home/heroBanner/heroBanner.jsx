import React, { useState, useEffect } from "react"; // Use 'useEffect' with a lowercase 'e'
import "./heroBanner.scss";
import { useNavigate } from "react-router-dom";
import "../../../hooks/useFetch";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";


import Img from "../../../components/lazyLoadingImage/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
const HeroBanner = () => {
  // Capitalize the component name
  const [background, setBackground] = useState(""); // Corrected typo 'backgroung' to 'background'
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.homeSlice);
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
 <div className="opacity-layer">

</div>
      <ContentWrapper>
      
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV shows, and People to Discover. Explore Now...
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show..."
              value={query} // Use 'value' to bind input to the 'query' state
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
     
      </ContentWrapper>

      
    </div>
  );
};

export default HeroBanner; // Capitalized the component name
