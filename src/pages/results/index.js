import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card } from './index.styles';

const Results = () => {
  const [results, setResults] = useState([]);
  let params = useParams();

  const getResults = async (name) => {
    const search = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const data = await search.json();
    setResults(data.results);
  };

  useEffect(() => {
    getResults(params.term);
  }, [params.term]);

  return (
    <Grid>
      {results.map((item) => {
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

export default Results;
