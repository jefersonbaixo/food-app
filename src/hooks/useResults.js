import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(``);

  const errorHandler = (err) => {
    if (err.message === `LOCATION permission is required to do this operation.`) {
      setError(`Permission to access location was denied`);
    } else {
      setError(`Something went wrong. Please try again later.`);
    }
  };

  const searchApi = async (term) => {
    setError(``);
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== `granted`) {
        setError(`Permission to access location was denied`);
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      const response = await yelp.get(`/search`, {
        params: {
          limit: 50,
          term,
          latitude,
          longitude,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      errorHandler(err);
    }
  };

  useEffect(() => {
    searchApi(`pasta`);
  }, []);

  return [searchApi, results, error];
};
