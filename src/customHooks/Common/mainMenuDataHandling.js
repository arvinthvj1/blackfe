import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useMainDataHandler = () => {
  const [current, setCurrent] = useState("mail");
  const [data, setData] = useState([]);

  const mainNavItems = useSelector((state) => state.headerData.mainMenu);

  function generateDataForComponent(data) {
    let dataSet = data.map((e, index) => {
      return {
        label: e.name,
        key: e.id,
        // icon: <MailOutlined />,
        children: e.children.map((f, fIndex) => {
          return {
            label: f.name,
            key: e.id + "" + fIndex,
          };
        }),
      };
    });
    setData(dataSet);
  }

  useEffect(() => {
    if (mainNavItems.length) {
      generateDataForComponent(mainNavItems);
    }
  }, [mainNavItems]);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return { data, current, onClick }
};

export default useMainDataHandler;