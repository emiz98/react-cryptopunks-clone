import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xE3701F48A27f5868886fE6b04f914dD8D213294a&order_direction=desc"
      );
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main punkListData={punkListData} />
    </div>
  );
}

export default App;
