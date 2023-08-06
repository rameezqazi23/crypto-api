import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const CoinItem = ({ coin }) => {
  const [favCoin, setFavCoin] = useState(false);

  const { user } = UserAuth();

//   const x = coin.price_change_percentage_24h;
//   console.log(x.toFixed(1));
  // console.log("Coin Saved", favCoin);

  const coinPath = doc(db, "users", `${user?.email}`);
  const addCoin = async () => {
    if (user?.email) {
      setFavCoin(true);
      await updateDoc(coinPath, {
        bookmarks: arrayUnion({
          id: coin.id,
          image: coin.image,
          name: coin.name,
          symbol: coin.symbol,
          rank: coin.market_cap_rank,
        }),
      });
    } else {
      alert("Sign in first to save favourite coins");
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td onClick={addCoin}>
        {favCoin ? <AiFillStar /> : <AiOutlineStar />}
    </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
