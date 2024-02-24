import { Carousel, Spin} from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function ProductBanner() {
  const data = useSelector((state) => state.homeData.bannerData);
  
  
  const renderSlideData = (data) => {
    
    if (!data || data.length === 0) {
      // Render Spin component while data is being fetched
      return <h2>No Banner</h2>;
    }
    return data.map((e,index) => {
      return (
        <div key={index}>
            <img src={`https://black.nikithawebdesign.com/banner-images/${e.desktop_banner}`} className="w-100 rounded" alt={e.title} />
        </div>
      );
    });
  };

  return   <Carousel autoplay>{renderSlideData(data)}</Carousel>;
}