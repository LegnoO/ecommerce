import {
  Typography,
  IconButton,
  Container,
  Card,
  Grid,
  Box,
  Stack,
  Button,
  Rating
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSingleProduct } from '~/features/productSlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { formatCurrencyToUSD } from '~/helpers/formatCurrency';
import { addToCart } from '~/features/cartSlice';
import Image from '~/components/Image';
import QuantityButton from '../../components/QuantityButton';
import Carousel from '~/components/Carousel';

const ProductDetail = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  const { product } = useAppSelector((state) => state.product);

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  return (
    <>
      {Object.keys(product).length > 0 && (
        <Box sx={{ backgroundColor: 'common.neutral' }}>
          <Container>
            {/* <Breadcrumb items={[{ label: 'test', link: '/product/1' }, { label: 'test' }]} /> */}
            <Grid container columnSpacing={4} sx={{ paddingY: 4, mb: '70px' }}>
              <Grid item xs={6} sx={{ overflow: 'hidden' }}>
                <Grid container spacing={1.5} sx={{ marginBottom: 4 }}>
                  <Carousel noTitle slideIndex={slideIndex}>
                    {product.images.map((image, index) => {
                      return (
                        <Grid key={index} item xs={12 / product.images.length}>
                          <Image src={image} alt="" />
                        </Grid>
                      );
                    })}
                  </Carousel>
                </Grid>
                <Grid container spacing={1.5}>
                  {product.images.map((image, index) => {
                    return (
                      <Grid key={index} item xs={3}>
                        <img
                          onClick={() => setSlideIndex(index)}
                          style={{ cursor: 'pointer', height: '100%', maxWidth: '100%' }}
                          src={image}
                          alt=""
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: '1.875rem',
                      color: 'none',
                      marginBottom: 2
                    }}
                  >
                    {product.brand}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', marginBottom: 2 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1.125rem',
                        color: 'none'
                      }}
                    >
                      ${formatCurrencyToUSD(product.price)} USD
                    </Typography>
                    {product.rating > 0.5 ? (
                      <Rating size="small" value={product.rating} precision={0.5} readOnly />
                    ) : (
                      <>
                        <Rating size="small" value={product.rating} precision={0.5} readOnly />
                        <Typography
                          component="span"
                          sx={{
                            marginLeft: 1.5,
                            fontSize: '0.875rem',
                            color: 'text.disabled'
                          }}
                        >
                          No review
                        </Typography>
                      </>
                    )}
                  </Stack>

                  <Typography
                    component="p"
                    sx={{ fontSize: '0.875rem', color: 'none', marginBottom: 2.75 }}
                  >
                    {product.description}
                  </Typography>
                </Box>
                <Stack sx={{ mb: 3, alignItems: 'center' }} direction="row">
                  <Typography component="p" sx={{ fontSize: '1rem', color: 'none', mr: 2 }}>
                    Quantity
                  </Typography>
                  <QuantityButton
                    quantity={quantity}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                  />
                </Stack>
                <Typography
                  sx={{
                    color: 'common.black',
                    fontSize: '0.875rem',
                    mb: 2
                  }}
                  component="p"
                >
                  Categories:{' '}
                  <Typography
                    component="span"
                    sx={{
                      color: 'common.gray',
                      fontSize: '0.875rem'
                    }}
                  >
                    {product.category}
                  </Typography>
                </Typography>

                <Button
                  onClick={handleAddToCart}
                  sx={{
                    color: 'common.black',
                    fontSize: '0.875rem',
                    p: 1.5,
                    backgroundColor: 'primary.light',
                    '&:hover': {
                      backgroundColor: 'primary.dark'
                    }
                  }}
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default ProductDetail;
