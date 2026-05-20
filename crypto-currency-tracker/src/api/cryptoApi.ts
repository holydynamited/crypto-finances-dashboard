import axios from "axios";



const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

if (!API_KEY) {
  throw new Error("Missing CoinGecko API key");
}

const cryptoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    
    'x-cg-demo-api-key': API_KEY,
    
  }
});



export const fetchPrices = async (ids:string[]) => {

    const  {data} = await cryptoApi.get('/simple/price', {
    params: {
      ids: ids.join(','),
      vs_currencies: 'usd',
      include_24hr_change: true,
    },
  });
  return data;
};

export const fetchPrice = async (id:string) => {

    const  {data} = await cryptoApi.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      ids: id.toLowerCase().trim(),
      price_change_percentage: '24h',
    },
  });
  console.log(data);
  return data[0];
};