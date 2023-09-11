import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../NavBar";
import MenuBar from "../MenuBar";

const GeneralLayout = () => {
  return (
    <Grid
      templateAreas={`"header header header "
                  "menu main sidenav"
                  "menu main sidenav"
                  "footer footer footer"`}
      gridTemplateRows={"1fr 1fr 1fr"}
      gridTemplateColumns={"150px 1fr 250px"}
      //   h="200px"
      //   gap="1"
      //   color="blackAlpha.700"
    >
      <GridItem pl="2" area={"header"}>
        {/* Entête (Logo, Bare de recherche, Choix de la langue, Sign In, Panier) */}
        <NavBar></NavBar>
        <MenuBar></MenuBar>
      </GridItem>
      {/* <GridItem pl="2" area={"menu"}>
        Menu Contextuel (flottant et responsive)
      </GridItem>
      <GridItem pl="2" area={"main"}>
        Main (Servira à présenter les produits sous différents axes)
      </GridItem>
      <GridItem area={"sidenav"}>
        Side Nav (Onglet de publicité flottant ou pas)
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem> */}
    </Grid>
  );
};

export default GeneralLayout;
