import { Grid, GridItem } from "@chakra-ui/react";
import Card from "./all_products_card";
import NoProductsFound from "./no_products_found";

// ------------------------------ ---------------------- --------
const AllProducts = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <NoProductsFound />
      ) : (
        <Grid templateColumns="repeat(3,1fr)" gap={6}>
          {products.map((product) => (
            <GridItem key={product.id}>
              <Card product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default AllProducts;
