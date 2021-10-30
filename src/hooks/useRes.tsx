import { useEffect, useState } from "react";
import { Text } from "react-native";
import yelp from "../api/yelp";
import User from "../helper/UserInterface";

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [cheapBusinesses, setCheapBusinesses] = useState([]);
  const [midBusinesses, setMidBusinesses] = useState([]);

  const searchApi = async (searchTerm: string | User[], region: string) : Promise<any> => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: region,
        }
      });
      const filter = res.data.businesses.filter((business: any) => business.price === "$$$" || business.price === "$$$$");
      setBusinesses(filter);
      const filterCheap = res.data.businesses.filter((business: any) => business.price === "$" || business.price === "");
      setCheapBusinesses(filterCheap);
      const filterMid = res.data.businesses.filter((business: any) => business.price === "$$");
      setMidBusinesses(filterMid);
    } catch (e) {
      return <Text>Something went wrong!</Text>;
    }
  }
  // searchTerm: string | User[]

  useEffect(() => {
    searchApi('pasta', 'california');
  }, []);

  return [searchApi, businesses, cheapBusinesses, midBusinesses] as const;
}
