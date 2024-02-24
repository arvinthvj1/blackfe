import { useEffect, useState } from "react";
import { storeBannerData, storeBestSellingData, storeFeaturedCategoryProductData, storeFeaturedProductData, storeHomeAdsData, storeHomeBlogData, storeHomeTestimonialData } from "../../redux-store/Home/homeSlice";
import { useDispatch } from "react-redux";
import { getData } from "../../Utilities/apiBase";

const useHomeDataFetch = () => {

 const dispatch= useDispatch();
 const [isLoading,setIsloading] = useState(false);
 const [isErrorMessage,setIsErrorMessage] = useState(false);


//  useDispatch

  const getHomeData = async () => {
   try{
    setIsloading(true);
    let apisToTrigger = [
      "home_banner_content",
      "featured-products",
      "featured-categories",
      "product_by_category",
      "home_ads",
      "home_blogs",
      "home_testimonials"
    ];
    let getBothDataFromApi = await getData(apisToTrigger);
    let [banner,featured_product,featured_categories,best_selling,home_ads,blogs,testimonials] = getBothDataFromApi;
    dispatch(storeBannerData(banner));
    dispatch(storeFeaturedProductData(featured_product));
    dispatch(storeFeaturedCategoryProductData(featured_categories));
    dispatch(storeBestSellingData(best_selling));
    dispatch(storeHomeAdsData(home_ads));
    dispatch(storeHomeBlogData(blogs));
    dispatch(storeHomeTestimonialData(testimonials));
    setIsloading(false);
   }catch(err){
     setIsErrorMessage(err)
   }
  };



  useEffect(() => {
    getHomeData();
  }, []);




  return { isLoading , isErrorMessage};
};

export default useHomeDataFetch;