import React, { useEffect, useState } from "react";
import CoinSearch from "../Components/CoinSearch";
import TableContentLoader from "../Components/TableCotentLoader";
import TrendingCoinSectionLoader from "../Components/TrendingCoinSectionLoader";
import Trending from "../Components/Trending";

const Home = ({ coins, trending }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const loadingData = coins
  // console.log("Loading Data Home component test==>", loadingData)

  return (
    <div>
      {loading ? <TableContentLoader /> : <CoinSearch coins={coins} />}
      {loading ? (
        <TrendingCoinSectionLoader />
      ) : (
        <Trending trending={trending} />
      )}

      {/* <CoinSearch coins={coins} /> */}
      {/* <Trending /> */}
    </div>
  );
};

export default Home;
