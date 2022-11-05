import React, { useState, useContext, useEffect } from "react";
import {
  SystemContainer,
  ResponsiveAppBar,
  SystemCard,
  SystemGrid,
  SystemDialog,
  SystemDataGrid,
} from "../../components";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  CardMedia,
  Button,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Badge,
  BadgeProps,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { Context } from "../../core/context/FieldContext";
import { IFieldContextType } from "../../core/context";
import FieldColumns from "../../core/Spiels/DataField";
const Products = () => {
  const {
    cart,
    setCart,
    cartHolder,
    setCartHolder,
    cartMapping,
    setCartMapping,
  } = useContext(Context) as IFieldContextType;

  const mockList = [
    {
      name: "hero Product",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/940x300/999/CCC",
    },
    {
      name: "Product 1",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 2",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 3",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 4",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 5",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 6",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
  ];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [categories, setCategories] = useState([
    {
      category: "Food",
    },
    {
      category: "Brush",
    },
    {
      category: "All",
    },
  ]);
  const [arr, setArr] = useState([]);
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Pedigree Dog Food Wet Food",
      detail: "Beef Chunks Flavor In Gravy 130g ",
      price: "99",
      image:
        "https://cdn.shopify.com/s/files/1/0472/7118/2499/products/PedigreeAdultBeefChunks130g.jpg?v=1632412362",
      category: "Food",
    },
    {
      id: 2,
      name: " Hair Brush",
      detail: "Comb Plastic Automatic Hair Brush",
      price: "99",
      image: "https://cf.shopee.ph/file/1930d6221a15f9ccb316f2976bfa66c7",
      category: "Brush",
    },
    {
      id: 3,
      name: "Grooming Brush",
      detail:
        "Self Cleaning Slicker Brush For Dogs, Pet Hair Remover Comb, Dog Grooming Shedding Tool, Professional Dog Hair Detangling Brush",
      price: "99",
      image:
        "https://lzd-img-global.slatic.net/g/p/50757438740966346c29f560a62a8630.jpg_2200x2200q80.jpg_.webp",
    },
    {
      id: 4,
      name: "PEDIGREE Puppy Pouch",
      detail: "Chicken and Rice in Jelly 100g ",
      price: "99",
      image:
        "https://www.puprise.com/wp-content/uploads/2018/11/Pedigree-Puppy-Chicken-Rice-in-Jelly-Wet-Dog-Food-Pouch-100gm.jpg",
    },
    {
      id: 5,
      name: "Pedigree DentaStix ",
      detail: "Small (5-10kg) 75g (5 Sticks) Dog Dental Treats",
      price: "99",
      image:
        "https://cdn.shopify.com/s/files/1/2297/2851/products/11_b8445170-b526-4b40-9e59-717df4370992_700x700.png?v=1660622762",
    },
    {
      id: 6,
      name: "M2 Two Tone Non Skid Stainless Bowl ",
      detail: "16oz",
      price: "99",
      image:
        "https://lzd-img-global.slatic.net/g/p/12250c22f55f226963efcd317bcf2338.jpg_2200x2200q80.jpg_.webp",
    },
    {
      id: 7,
      name: "Michiko Flat Bone",
      detail: "Aqua Blue",
      price: "99",
      image:
        "https://lzd-img-global.slatic.net/g/p/9a65a0d42979e2e22df97b6b6b3e5cde.jpg_2200x2200q80.jpg_.webp",
    },
  ]);
  const columns = [
    {
      field: FieldColumns.propertyNames.name,
      headerName: FieldColumns.fieldLabels.name,
      flex: 1.5,
      width: 250,
    },
    {
      field: FieldColumns.propertyNames.details,
      headerName: FieldColumns.fieldLabels.details,
      flex: 1.5,
    },
    {
      field: FieldColumns.propertyNames.image,
      headerName: FieldColumns.fieldLabels.image,
      flex: 1.5,
      sortable: false,
    },
    {
      field: FieldColumns.propertyNames.price,
      headerName: FieldColumns.fieldLabels.price,
      flex: 1.5,
      sortable: false,
    },
    {
      headerName: FieldColumns.fieldLabels.action,
      sortable: false,
      flex: 1,
    },
  ];
  useEffect(() => {
    loadProductOnCart();
  }, [cartHolder]);
  const loadProductOnCart = () => {
    const finalData = cartHolder?.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        details: item.details,
      };
    });
    setCartMapping(finalData);
  };
  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    if (value == "All") {
      setProductList((productList: any) => [...productList, ...mockList]);
    } else {
      const filtered = productList.filter((i) => i.category == value);
      setProductList(filtered);
    }
  };
  const handleCart = (object: any) => {
    setCart((cart: any) => cart + 1);
    cartHolder?.push({
      id: object.id,
      name: object.name,
      image: object.image,
      price: object.price,
      detail: object.detail,
    });
    loadProductOnCart();
    alert("Successfully Added to cart");
  };
  return (
    <>
      <ResponsiveAppBar />
      {console.log(cartHolder)}
      <SystemContainer
        fixed={false}
        maxWidth={"lg"}
        stylish={{ marginTop: "100px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SystemCard
              children={
                <CardContent>
                  <Typography variant="h6">Products</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Products
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Products"
                      onChange={handleSelectChange}
                    >
                      {categories.map((item) => {
                        return (
                          <MenuItem value={item.category}>
                            {item.category}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </CardContent>
              }
            />
          </Grid>
          <Grid item xs={8}>
            <SystemCard
              children={
                <CardContent>
                  <Typography variant="h5">Products List</Typography>
                  <IconButton
                    onClick={() => setDialogOpen(!dialogOpen)}
                    aria-label="cart"
                  >
                    <StyledBadge badgeContent={cart} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                  <hr />
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {productList.map((item) => {
                      return (
                        <Grid item xs={6}>
                          <Card>
                            <CardMedia
                              component="img"
                              height="140"
                              image={item.image}
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.detail}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                size="small"
                                onClick={() => handleCart(item)}
                              >
                                ADD TO CART
                              </Button>
                              <Button size="small">ADD TO FAVORITE</Button>
                            </CardActions>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </CardContent>
              }
            />
          </Grid>
        </Grid>
        <SystemDialog
          open={dialogOpen}
          handleClose={() => setDialogOpen(!dialogOpen)}
          title={"Cart"}
          handleDisagree={() => setDialogOpen(!dialogOpen)}
          handleAgreeText={"PROCEED TO PAYMENT"}
          handleAgree={() => setDialogOpen(!dialogOpen)}
          handleDisagreeText={"REMOVE ALL"}
          children={
            <>
              <SystemDataGrid dataRow={cartMapping} dataColumn={columns} />
            </>
          }
        />
      </SystemContainer>
    </>
  );
};

export default Products;
