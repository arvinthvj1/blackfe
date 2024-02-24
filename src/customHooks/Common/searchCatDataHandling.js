// hooks/useDataFetch.js

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSearchCatDataHandler = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const leftNavdata = useSelector((state) => state.headerData.categories);

    function generateDataStructureForComponent(data) {
        let dataToset = data.map((e, index) => {
            return {
                id: e.id,
                label: e.name,
                key: index + "",
            };
        });
        setData(dataToset);
        //console.log(dataToset);
    }

    useEffect(() => {
        if (leftNavdata.length > 0) {
            setIsloading(false);
            generateDataStructureForComponent(leftNavdata);
        }
    }, [leftNavdata]);

    return { data, isLoading };
};

export default useSearchCatDataHandler;