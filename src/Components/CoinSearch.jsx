import React, { useState } from 'react'

import CoinItem from './CoinItem';


const CoinSearch = ({ coins }) => {
  console.log(coins)
  const [searchCoin, setSearchCoin] = useState("")
  console.log(searchCoin)

  return (
    <div className='rounded-div my-y '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>Find</h1>
        <form action="">
          <input className='w-full bg-primary border border-input px-2 py-4 rounded-xl shadow-xl' 
          onChange={(e) => setSearchCoin(e.target.value)} type="text" placeholder='Seach coins...' />
          <button>Search</button>
        </form>

      </div>
      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden md:table-cell'>Market</th>
            <th>Last 7 days</th>

          </tr>
        </thead>
        <tbody>
          {/* display all coins by default if search any of the coin they filters the item and map
          respectively that's how coins.filter().map() works */}
          {coins.filter((value) => {

            if (searchCoin === '') {
              return value;

            } else if (value.name.toLowerCase().includes(searchCoin.toLowerCase())) {
              return value;
            }

          }).map((coin, index) => (
            <CoinItem coin={coin} key={coin.id} />
          ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch
