import React from "react";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./Store/homeSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/PageDetails/PageDetails";
import SearchResult from "./pages/SearchResult/SearchResult";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  const dispatch = useDispatch();
  const { url }=useSelector((state)=>state.homeSlice)
  //console.log(url);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {


      /////dispatch(getApiConfiguration(res));
      ///console.log(res);

const url ={
  backdrop:res.images.secure_base_url+"original",
  poster:res.images.secure_base_url+"original",
  profile:res.images.secure_base_url+"original"

}
dispatch(getApiConfiguration(url))

    });
  };


  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

   
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
 ///// console.log(data);
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });
    console.log(allGenres);
    dispatch(getGenres(allGenres))
  }
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" extact element={<Home/>}></Route>
      <Route path="/:mediaType/:id"  element={<Details/>}></Route>
      <Route path="/search/:query"  element={<SearchResult/>}></Route>
      <Route path="/explore/:mediaType"  element={< Explore/>}></Route>
      <Route path=""  element={<PageNotFound/>}></Route>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App;
