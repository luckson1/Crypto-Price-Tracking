import axios from "axios";
import React, { useEffect, useState } from "react";
import { Coin } from "./Coin";
import "./App.css"


function App() {
  const [coins, setCoins]=useState([])
  const [search, setSearch]=useState('')
  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);})
    .catch(error=>alert('Theres is an error'));
  }, []);
const handleChange= e=>{setSearch(e.target.value)}
const filteredCoins=coins.filter(coin=>
  coin.name.toLowerCase().includes(search.toLowerCase()))
  return (<div className="coin-app">
    <div className="coin-search">
      <h1 className="coint-text">Search a Currency</h1>
      <form>
        <input onChange={handleChange} type='text' placeholder="Search for a Coin" className="coin-input"/>
      </form>
    </div>
    {filteredCoins.map(coin => {
      return (
        <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol} 
        volume={coin.total_volume} 
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        marketcap={coin.market_cap}/>
        
      )
    })}
    <div>

    </div>
  </div>);
}

export default App;
