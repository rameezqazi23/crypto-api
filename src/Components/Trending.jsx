import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trending = () => {
    const [trending, setTrending] = useState()
    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url).then((response) => {
            setTrending(response.data.coins)
            console.log("Trending response", response.data.coins)
        })
    }, [url])

    return (
        <div className='rounded-div my-12 py-8 text-primary'>
            <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {trending?.map((trendingCoin) => (
                    <div className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
                        <div className='flex  w-full justify-between items-center'>
                            <div className='flex'>

                                <img src={trendingCoin.item.small} className='mr-4 rounded-full' alt='/' />
                                <div>
                                    <p className='font-bold'>{trendingCoin.item.name}</p>
                                    <p>{trendingCoin.item.symbol}</p>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mr-4'>
                            <img className='w-4 mr-2' src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt="/" />
                            {trendingCoin.item.price_btc.toFixed(5)}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Trending
