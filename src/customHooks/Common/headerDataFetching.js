import { useEffect, useState } from "react";
import { storeCategories, storeFooterCategory, storeFooterMenu, storeMainMenu } from "../../redux-store/Common/headerSlice";
import { useDispatch } from "react-redux";
import { getData } from "../../Utilities/apiBase";

const useHeaderDataFetch = () => {

 const dispatch= useDispatch();
 const [isLoading,setIsloading] = useState(false);
 const [isErrorMessage,setIsErrorMessage] = useState(false);


  const getCategorydataAndMainMenuData = async () => {
   try{
    setIsloading(true);
    let apisToTrigger = [
      "categories",
      "main_menu_nav_items",
      "footer_categories",
      "footer_links"
    ];
    let getBothDataFromApi = await getData(apisToTrigger);
    // debugger
    let [category, menu,footer_categories,footer_links] = getBothDataFromApi;
    dispatch(storeCategories(category));
    dispatch(storeMainMenu(menu));
    dispatch(storeFooterCategory(footer_categories));
    dispatch(storeFooterMenu(footer_links));
    setIsloading(false);
   }catch(err){
     setIsErrorMessage(err)
   }
  };



  useEffect(() => {
    getCategorydataAndMainMenuData();
  }, []);




  return { isLoading , isErrorMessage};
};

export default useHeaderDataFetch;