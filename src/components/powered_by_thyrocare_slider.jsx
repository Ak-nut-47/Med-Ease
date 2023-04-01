import { Slider, Box, Button, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// function SliderWithButtons() {
// }

// ----------------image imports for PoweredByThyrocareSlider----------------
import full_body_checkup from "../assets/Photos/PoweredByThyrocareSlider/full_body_checkup.png";
import vitamins from "../assets/Photos/PoweredByThyrocareSlider/vitamins.jpg";
import diabetes from "../assets/Photos/PoweredByThyrocareSlider/diabetes.jpg";
import thyroid from "../assets/Photos/PoweredByThyrocareSlider/thyroid.png";
import women_care from "../assets/Photos/PoweredByThyrocareSlider/women_care.jpg";
import fever_and_influenza from "../assets/Photos/PoweredByThyrocareSlider/fever_and_influenza.png";
import covid_care from "../assets/Photos/PoweredByThyrocareSlider/covid_care.jpg";
import bone_health from "../assets/Photos/PoweredByThyrocareSlider/bone_health.jpg";
import heart from "../assets/Photos/PoweredByThyrocareSlider/heart.jpg";
import lifestyle from "../assets/Photos/PoweredByThyrocareSlider/lifestyle.jpg";

// ------------------ PoweredByThyrocareSlider Component ------------------

// ----------------------------------------------------

const PoweredByThyrocareSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const arr = [
    full_body_checkup,
    vitamins,
    diabetes,
    thyroid,
    women_care,
    fever_and_influenza,
    covid_care,
    bone_health,
    heart,
    lifestyle,
  ];
  return (
    <>
      <Box mt="30px">
        <Carousel responsive={responsive}>
          {arr.map((item) => (
            <Image src={item} width="85%" alt={item.toString()} />
          ))}
        </Carousel>
      </Box>
      ;
    </>
  );
};

export default PoweredByThyrocareSlider;
