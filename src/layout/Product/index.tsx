/** @format */

import { useState } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  CardMedia,
  CardContent,
  Container,
  Card,
  Grid,
  Rating,
  Box,
  Stack,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import QuickViewButton from "./QuickViewButton";
const Product = () => {
  const Figure = styled("figure")({
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    transform: "translate(35%,50%)",
    backgroundColor: "#ff682f",
    borderRadius: "4px",
    fontSize: "11px",
    fontFamily: "Poppins,serif",
    lineHeight: "1rem",
  });

  return (
    <>
      <Container sx={{ marginBottom: "80px" }}>
        <Typography
          sx={{ fontSize: 36, color: "text.black" }}
          className="text-center mb-5 fw-light"
          component="h4">
          Our Products
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Card className="position-relative shadow-none cursor-pointer">
              <Figure
                className="fw-large"
                sx={{
                  color: "common.white",
                  padding: 0.35,
                }}>
                -50%
              </Figure>

              <Box
                sx={{
                  "&:hover .quickview-icon": {
                    transform: "translateY(-10px)",
                    opacity: 1,
                  },
                  "&:hover .sold-out-button": {
                    transform: "scale(1) translateY(-66%)",
                    opacity: 1,
                  },
                }}
                className="position-relative">
                <CardMedia
                  component="img"
                  image="https://minim-demo.myshopify.com/cdn/shop/products/11-shop_dc7f2c3c-6550-45b8-b910-fbb215e9c111.png?v=1552896618"
                  alt="green iguana"
                />
                <Button
                  className="sold-out-button"
                  sx={{
                    "&": {
                      position: "absolute",
                      bottom: "0%",
                      left: "27.5%",
                      transform: "scale(0)",
                      borderRadius: "50%",
                      backgroundColor: "common.white",
                      color: "primary.main",
                      fontSize:16,
                      height: "120px",
                      width: "120px",
                      zIndex: "999",
                      transition: "all .4s ease",
                    },
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "common.white",
                    },
                  }}>
                  Sold Out
                </Button>
                <Box
                  sx={{
                    "&": {
                      opacity: 0,
                      transform: "translateY(0px)",
                      transition: "all .5s ease",
                    },
                  }}
                  className="quickview-icon position-absolute bottom-0 w-100 d-flex justify-content-center">
                  <Stack direction="row" spacing={1.25}>
                    <QuickViewButton>
                      <SearchIcon />
                    </QuickViewButton>
                    <QuickViewButton>
                      <SearchIcon />
                    </QuickViewButton>
                    <QuickViewButton>
                      <SearchIcon />
                    </QuickViewButton>
                  </Stack>
                </Box>
              </Box>
              <CardContent className="text-center cursor-pointer">
                <Typography
                  sx={{ fontSize: 12, color: "text.disabled" }}
                  gutterBottom
                  component="h6">
                  OTTOMAN CHAIR
                </Typography>
                <Typography
                  component="p"
                  className="fw-large"
                  sx={{ color: "text.black" }}>
                  $250.00
                </Typography>
                <Rating
                  readOnly
                  precision={0.5}
                  value={1}
                  max={1}
                  size="small"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Product;
