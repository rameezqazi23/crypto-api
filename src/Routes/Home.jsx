import React from 'react'
import CoinSearch from '../Components/CoinSearch'
import TableContentLoader from '../Components/TableCotentLoader'
import Trending from '../Components/Trending'

const Home = ({ coins }) => {
  return (
    <div>
      {/* {coins.data ? <TableContentLoader /> : <CoinSearch coins={coins} />} */}
      <CoinSearch coins={coins} />
      <Trending />


    </div>
  )
}

export default Home
