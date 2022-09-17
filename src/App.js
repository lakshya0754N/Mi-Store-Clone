import React from 'react';
import './App.css';
import PreNavBar from './components/PreNavBar';
import NavBar from './components/NavBar.js';
import Slider from './components/Slider.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./Data/data.json";
import Offers from "./components/Offers.js";
import Headings from "./components/Headings.js";
import StarProducts from "./components/StarProducts.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptions from "./components/NavOptions.js"


function App() {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} audio={data.audio} accessories={data.accessories} home={data.home} />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Headings text="STAR PRODUCTS" />
      <StarProducts starProducts={data.starProduct} />
      <Headings text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        {/* <Route path="/" element={<HotAccessoriesMenu />}> */}
          <Route path="music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
          <Route path="smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}/>
          <Route path="home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}/>
          <Route path="lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}/>
          <Route path="mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
        {/* </Route> */}
      </Routes>
      <Headings text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Headings text="VIDEOS" />
      <Videos videos={data.videos}/>

      <Headings text="IN THE PRESS" />
      <Banner banner={data.banner}/>
      <Footer footer={data.footer} />
    </Router>

  )
}

export default App;
