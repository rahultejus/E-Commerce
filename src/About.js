import React from 'react';
import HeroSection from './components/HeroSection';
import {useProductContext} from './context/productcontext';
 export const About = () => {
  //console.log(useProductContext());
  const myName=useProductContext();
  const data = {
    name:"RK Ecommerce",
  };
  return(
    <>
        <HeroSection myData={data} />{" "}
    </> );
};

export default About;