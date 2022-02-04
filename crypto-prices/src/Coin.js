import React from 'react';
import "./Coin.css"

export const Coin = ({name,symbol,image,price,volume, priceChange, marketcap}) => {
  return <div className='coin-container'>
      <div className='coin-row'>
          <div className='coin'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='coin-symbol'> {symbol}</p>
          </div>
      </div>
      <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>{volume.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
          {priceChange <0? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ): (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
          <p className='coin-marketcap'> Mkt Cap:${marketcap.toLocaleString('en-US')}</p>  
      </div>

  </div>;
};
