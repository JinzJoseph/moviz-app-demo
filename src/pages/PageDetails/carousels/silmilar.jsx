import React from "react";


import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../Components/Carousel/Carousel";


const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        ></Carousel>
    );
};

export default Similar;