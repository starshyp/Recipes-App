import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledInfo, StyledWrapper, StyledButton } from './index.styles';

const Recipe = () => {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setRecipe(data);
    console.log(data);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <StyledWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <StyledInfo>
        <StyledButton
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </StyledButton>
        <StyledButton
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </StyledButton>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </StyledInfo>
    </StyledWrapper>
  );
};

export default Recipe;
