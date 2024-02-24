import React, { useContext, useEffect, useState } from "react";
import AnimatedMotion from "../framerMotion/AnimatedMotion";
import { LanguageContext } from "../context/LanguageContext";

const i18n = require("../utils/i18n");

function Category({ portfolios, setFilteredPortfolios }) {
  const { language } = useContext(LanguageContext);

  const plusCategories = [
    i18n.text(language, i18n.MAP["portfolio-category"]),
    ...new Set(portfolios.map((portfolio) => portfolio.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    i18n.text(language, i18n.MAP["portfolio-category"])
  );

  useEffect(() => {
    if (
      selectedCategory === i18n.text(language, i18n.MAP["portfolio-category"])
    ) {
      setFilteredPortfolios(portfolios);
    } else {
      const filtered = portfolios.filter(
        (portfolio) => portfolio.category === selectedCategory
      );
      setFilteredPortfolios(filtered);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <AnimatedMotion
      animationName="navbarAnimatio"
      className="flex flex-wrap justify-center items-center"
    >
      {plusCategories.map((category, index) => (
        <div
          className={`px-2 text-lg cursor-pointer font-bold ${
            selectedCategory === category ? "text-green-500" : ""
          }`}
          key={index}
          onClick={() => handleCategoryClick(category)}
        >
          <AnimatedMotion animationName="navbarItemAnimatio">
            <p> {category}</p>
          </AnimatedMotion>
        </div>
      ))}
    </AnimatedMotion>
  );
}

export default Category;
