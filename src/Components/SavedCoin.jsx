import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const SavedCoin = () => {
    const [coins, setCoins] = useState([])
    return (
        <div>
            {coins.length === 0 ?
                (<p>
                    Currently you dont have any coins yes
                    <Link to='/'>Click here to add coins</Link>

                </p>)
                : (
                    <table className='w-full border-collapse text-center'>
                        <thead>
                            <tr className='border-b'>
                                <th className='px-4'>#</th>
                                <th className='text-left'>Coin</th>
                                <th className='text-left'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => {
                                <tr className='h-[60px] overflow-hidden' key={coin.id}>
                                    <td>{coin?.rank}</td>
                                    <td>
                                        <Link to={`/coin/${coin.id}`}>
                                            <div className='flex items-center'>
                                                <img className='w-8 mr-4' src={coin?.image} alt="/" />
                                                <div>
                                                    <p className='hidden sm:table-cell'>{coin?.name}</p>
                                                    <p className='text-left text-sm text-gray-600'>{coin?.symbol.toUpperCase()}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className='pl-8'>
                                        <AiOutlineClose className='cursor-pointer' />
                                    </td>
                                </tr>

                            })}
                        </tbody>
                    </table>
                )}



        </div>
    )
}

export default SavedCoin
