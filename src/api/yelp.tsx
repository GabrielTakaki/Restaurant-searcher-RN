import axios from 'axios';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer JIj0NMxbuGNgc1wejB56VLEBrGW5SCYOgtaygQLEbY-DcaUMaXaxo_DWMRAciIKUyqu5BZSeAJz2FoGTMTGoCFzEo33HTnoLXro1VAYq4pQE4o0WsdgRFN-im9F7YXYx'
  }
});

// yelp.get('/search')

