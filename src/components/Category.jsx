import React, {useEffect, useState } from "react";
import AnimatedMotion from "../framerMotion/AnimatedMotion";


function Category({ portfolios, setFilteredPortfolios }) {


  const plusCategories = [
    "Összes",
    ...new Set(portfolios.map((portfolio) => portfolio.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("Összes"); 

  useEffect(() => {   
    if (selectedCategory === "Összes") {
      setFilteredPortfolios(portfolios);
    } else {
      const filtered = portfolios.filter((portfolio) => portfolio.category === selectedCategory);
      setFilteredPortfolios(filtered);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
   
      <AnimatedMotion animationName="navbarAnimatio"  className="flex flex-wrap justify-center items-center">
        {plusCategories.map((category, index) => (
          <div
            className={`px-2 text-lg cursor-pointer font-bold ${
              selectedCategory === category ? "text-green-500" : ""
            }`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <AnimatedMotion animationName="navbarItemAnimatio">
          <p>  {category}</p>
          </AnimatedMotion>
          </div>
        ))}
      </AnimatedMotion>    
  
  );
}

export default Category;
