import Topbar from "../components/shared/topbar";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/shared/navbar";
import SearchBar from "../components/search_bar/search_bar";
import NavlinkCard from "../components/navlink_card";
import Banner1 from "../components/banner_1";
import PoweredByThyrocare from "../components/powered_by_thyrocare";
// ------------------ Homepage Component ------------------
export default function Homepage() {
  //Everything below the topbar on this app is inside this Box component which takes 90% of the width of the screen;
  return (
    <>
      <Topbar />
      <Navbar />
      <Box width="95%" margin="auto">
        <SearchBar />
        <NavlinkCard />
        <Banner1 />
        <PoweredByThyrocare />
      </Box>
    </>
  );
}
