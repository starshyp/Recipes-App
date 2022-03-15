import React from 'react';
import { useEffect, useState } from 'react';
import { Wrapper, Card, Gradient } from './index.styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
      );
      const data = await res.json();
      localStorage.setItem('veggie', JSON.stringify(data));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '3rem',
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' + recipe.id}>
                  <p key={recipe.id}>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
