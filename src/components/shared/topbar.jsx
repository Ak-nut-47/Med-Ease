import axios from "axios";
import { useEffect, useState } from "react";
// --------------------------------------------------------
//All Chakra Imports
import {
  IconButton,
  Box,
  Image,
  Text,
  Center,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// -------------------------------------------------------
//All React Icon Pack Imports

import { BsPhone, BsPersonFill, BsLightningCharge } from "react-icons/bs";
import { MdOutlineLocalOffer, MdShoppingCart } from "react-icons/md";
// ------------------------------------------------------------------
//image imports
import med_ease_landscape from "../../assets/Photos/Logos/med_ease_landscape.png";

//------------------------------------------------------------------------------------------------
//Navbar Component imported here-
import TopbarIconFlex from "../topbar_components/topbarIconFlex";
//------------------------------------------------------------------------------------------------
let url = `https://api.postalpincode.in/pincode/785662`;
// let url = "gg";
const Topbar = () => {
  const [postOffice, setPostOffice] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    //     const postOfficeArray = res.data[0].PostOffice;
    //     const requiredPostOfficeName = postOfficeArray.find(
    //       (item) => item.DeliveryStatus === "Delivery"
    //     );
    //     setPostOffice(requiredPostOfficeName.Name);
    //     console.log(requiredPostOfficeName.Name);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <Box p="10px 40px" borderBottom="1px solid #D9D9D9">
      <Box display="flex">
        <Box w="50%" display="flex">
          <Box
            borderRight="2px solid #D9D9D9"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="0px 20px"
          >
            <Image width="120px" src={med_ease_landscape} />
          </Box>
          <Box p="0px 20px">
            <Text color="#B5B7BB">
              <span>
                <IconButton
                  bg="white"
                  color="#FBBC04"
                  boxSize={3}
                  icon={<BsLightningCharge />}
                />
              </span>
              Express delivery to{" "}
            </Text>
            <Text fontWeight="medium">Select Pincode {"\u02C5"}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          // border="1px solid green"
          justifyContent="space-evenly"
          w="50%"
          fontWeight="semibold"
        >
          <TopbarIconFlex
            bg="#EEF4FF"
            pr="10px"
            borderRadius="10px"
            iconbg="#EEF4FF"
            icon={<BsPhone />}
            text="Download App"
          />

          <TopbarIconFlex
            iconbg="white"
            icon={<BsPersonFill />}
            text="Hello, Log in"
          />
          <Center>
            <Link to="/admin">
              <TopbarIconFlex
                iconbg="white"
                icon={<BsPersonFill />}
                text="Admin Panel"
              />
            </Link>
          </Center>
          <TopbarIconFlex
            iconbg="white"
            icon={<MdOutlineLocalOffer />}
            text="Offers"
          />
          <TopbarIconFlex
            iconbg="white"
            icon={<MdShoppingCart />}
            text="Cart"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;

/// Hex code for the faint grey or light grey used as border is #D9D9D9
