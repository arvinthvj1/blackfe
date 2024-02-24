import React from "react";
import Header from "../Components/Common/Header";
import ProductBanner from "../Components/Home/BannerCarousel";
import { Carousel, Col, Row, Tabs } from "antd";
import { BestSellingProducts } from "../Components/Home/BestSellingProducts";
import useHomeDataFetch from "../customHooks/Home/homeDataHandler";
import { FeaturedCategoryProducts } from "../Components/Home/FeaturedCategoryProducts";
import Title from "antd/es/typography/Title";
import { useSelector } from "react-redux";
import { FeaturedProducts } from "../Components/Home/FeaturedProducts";
import { HomeAds } from "../Components/Home/HomeAds";
import BlogCard from "../Components/Common/BlogCard";
import Footer from "../Components/Common/Footer";


export const Home = () => {
  useHomeDataFetch();
  const data = useSelector((state) => state.homeData.featuredCategoryProductData);
  const blogs = useSelector((state) => state.homeData.homeBlogData);
  const testimonials = useSelector((state) => state.homeData.homeTestimonialData);
  const ads = useSelector((state) => state.homeData.homeAdsData);
  const ad1 = ads.slice(0, 2);
  const ad2 = ads.slice(2, 2);
  //console.log(data);
  return (
    <div>
      <Header />
      <div className="commonContainerFluid banner text-center">
        <ProductBanner />
      </div>
      <div className="commonContainerFluid py-3">
        <Title level={2} className="text-center">Featured Products</Title>
        <Row gutter={16}>
          <FeaturedProducts />
        </Row>
      </div>
      <div className="commonContainerFluid py-3">
        <Row gutter={16}>
          {ad1.map((e, i) => {
            return <HomeAds ad={e} />;
          })}
        </Row>
      </div>
      <div className="bg-light">
        <div className="commonContainerFluid py-3">
          <Title level={2} className="text-center">Best Selling Products</Title>
          <Row gutter={16}>
            <BestSellingProducts />
          </Row>
        </div>
      </div>

      <div className="commonContainerFluid py-3">
        <Tabs
          defaultActiveKey="1"
          centered
          items={data.map((e, i) => {
            return {
              label: `${e.name}`,
              key: i,
              children: <Row gutter={16}><FeaturedCategoryProducts products={e.products} /></Row>,
            };
          })}
        />
      </div>
      <div className="commonContainerFluid py-3">
        <Row gutter={16}>
          {ad1.map((e, i) => {
            return <HomeAds ad={e} />;
          })}
        </Row>
      </div>
      <div className="commonContainerFluid">
        <Row gutter={16}>
          {blogs.map((e, i) => {
            return <BlogCard data={e} />;
          })}
        </Row>
      </div>
      <div className="bg-light mt-3 py-5">
          <Title level={2} className="text-center">Our Customers Say</Title>
        <div className="homeTestimonials mx-auto">
          <Carousel autoplay>
            {testimonials.map((e, i) => {
              return <div key={i} className="text-center py-3">
                {e.message}
                <h3>{e.name}</h3>
                <p>{e.company}, {e.city}</p>
              </div>;
            })}

          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};