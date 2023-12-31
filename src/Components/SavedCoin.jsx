import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  //   getting data from firebase
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.bookmarks);
    });
    // console.log("Getting data from firebase==>",bookmarks)
  }, [user?.email]);

  const coinPath = doc(db, "users", `${user.email}`);

  // console.log("Coin data 45433", coins);

  //delete array item from bookmarks  array to create delete coin functionality using filter method.
  const deleteCoin = async (coinId) => {
    try {
      const result = coins.filter((item) => item.id !== coinId);
      await updateDoc(coinPath, {
        bookmarks: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          Currently you dont have any coins yes
          <Link to="/">Click here to add coins</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">#</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr className="h-[60px] overflow-hidden" key={coin.id}>
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img className="w-8 mr-4" src={coin?.image} alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-left text-sm text-gray-600">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose
                    onClick={() => deleteCoin(coin.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
