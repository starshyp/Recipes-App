import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card } from './index.styles';
import { Link } from 'react-router-dom';

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
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
