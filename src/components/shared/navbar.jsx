import axios from "axios";
import { useEffect, useState } from "react";
// let url=`https://api.postalpincode.in/pincode/784001`
let url = "gg";
const Navbar = () => {
  const [postOffice, setPostOffice] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => {
      const postOfficeArray = res.data[0].PostOffice;
      const requiredPostOfficeName = postOfficeArray.find(
        (item) => item.DeliveryStatus === "Delivery"
      );
      setPostOffice(requiredPostOfficeName.Name);
    });
  }, []);
  return <></>;
};

export default Navbar;
