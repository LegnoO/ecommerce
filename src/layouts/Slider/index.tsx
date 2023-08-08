/** @format */

import { styled } from '@mui/system';
import { Typography, Container, Grid, Box } from '@mui/material';
import Carousel from '~/components/Carousel';

const Slider = () => {
  const Background = styled('div')({
    backgroundImage: 'url(//minim-demo.myshopify.com/cdn/shop/files/bg-tes.jpg?v=1614310297)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  });

  const styles = {
    carousel: {
      title: { marginBottom: '25px' }
    }
  };

  return (
    <Background className="">
      <Container sx={{ padding: '240px 0' }} className="">
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{ width: '75%', margin: '0 auto' }}>
              <Carousel styles={styles.carousel} width="100%">
                <Box>
                  <Typography sx={{ mb: 3 }} className="fw-medium" variant="h5" color="primary">
                    Reasonable Price
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontSize: 18, lineHeight: '34px', color: 'text.disabled' }}
                  >
                    One of our mission is to make sure that everyone could be able to afford our
                    products, in general. So with this in mind, we’ve worked hard to reduce the cost
                    and bring our the best offer for our beloved...
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ mb: 3 }} variant="h5" color="primary">
                    Reasonable Price
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontSize: 18, lineHeight: '34px', color: 'text.disabled' }}
                  >
                    One of our mission is to make sure that everyone could be able to afford our
                    products, in general. So with this in mind, we’ve worked hard to reduce the cost
                    and bring our the best offer for our beloved...
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ mb: 3 }} variant="h5" color="primary">
                    Reasonable Price
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontSize: 18, lineHeight: '34px', color: 'text.disabled' }}
                  >
                    One of our mission is to make sure that everyone could be able to afford our
                    products, in general. So with this in mind, we’ve worked hard to reduce the cost
                    and bring our the best offer for our beloved...
                  </Typography>
                </Box>
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: '60%', margin: '0 auto' }}>
              <Typography sx={{ color: 'text.disabled', fontSize: 12, mb: 4 }} component="h6">
                WHY CHOOSE US
              </Typography>
              <Typography className="fw-light" variant="h3" color="primary">
                A little things about Minim
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default Slider;
