import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import HomeInformation from "../components/HomeInformation"
import Navbar from '../components/Navbar';


const Home = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-around items-center max-md:h-full  p-5">
      {/* information */}
      <div style={{ boxShadow: boxShadow }} className="w-[25%] h-[80%] rounded-2xl max-md:w-full max-md:h-full max-md:mb-10">
        <HomeInformation />
      </div>
      {/* about */}
      <div style={{ boxShadow: boxShadow }} className="w-[70%] h-[80%] max-md:h-full rounded-2xl overflow-auto  max-md:w-full max-md:pt-10 scrollbar-thin scrollbar-thumb-teal-500">
        <Navbar />
      </div>
    </div>

  );
};

export default Home;
