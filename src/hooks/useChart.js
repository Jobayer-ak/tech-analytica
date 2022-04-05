import axios from "axios";
import { useEffect, useState } from "react";

const useChart = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((data) => setInfos(data));
  }, []);

  // console.log(infos);
  return [infos, setInfos];
};

export default useChart;
