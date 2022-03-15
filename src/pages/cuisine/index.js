import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, Card } from './index.styles';

const Cuisine = () => {
  const [cuisine, setCuisine] = React.useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const cuisine = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`
    );
    const data = await cuisine.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
