import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';

const CoinSearch = ({ coins }) => {
  console.log(coins)
  return (
    <div>
      <div>
        <h1>Search</h1>
        <form action="">
          <input type="text" placeholder='Seach favourite coin' />
        </form>

      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Market</th>
            <th>Last 7 days</th>

          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr>
              <td><AiOutlineStar /></td>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className='flex'>
                  <img src={coin.image} alt={coin.id} />
                  <p>{coin.name}</p>
                </div>
              </td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.sparkline_in_7d.price}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch
