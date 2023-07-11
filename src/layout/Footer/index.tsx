import { Typography, Container, Grid, Stack, Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <Container
       
        className="footer"
        sx={{
          marginBottom: '30px'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <img
                src="https://minim-demo.myshopify.com/cdn/shop/t/2/assets/logo.png?v=76281246793426370331550819075"
                alt=""
                style={{ objectFit: 'cover' }}
              />
              <Stack spacing={3} mt={4}>
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: '25px',
                    color: 'text.disabled',
                    paddingRight: '10px'
                  }}
                  component="p"
                >
                  WE ARE EAGER TO HELP YOU TO MAKE YOUR HOUSE MORE BEAUTIFUL, MORE LIVABLE WITH AN
                  AFFORDABLE PRICE & GOOD QUALITY OF FURNITURES.
                </Typography>
                <Stack
                  sx={{
                    '& > *': {
                      backgroundColor: '#f3f3f3',
                      fontSize: '14px',
                      color: '#999'
                    }
                  }}
                  direction="row"
                  spacing={1}
                >
                  <IconButton>
                    <FontAwesomeIcon icon={faCoffee} />
                  </IconButton>
                  <IconButton>
                    <FontAwesomeIcon icon={faCoffee} />
                  </IconButton>
                  <IconButton>
                    <FontAwesomeIcon icon={faCoffee} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography className="fw-large" component="h6" mb={4}>
                Shop
              </Typography>
              <Box className="text-muted">
                <Stack
                  sx={{
                    '&>*': {
                      fontSize: '14px',
                      color: 'text.disabled'
                    }
                  }}
                  direction="column"
                  spacing={2}
                >
                  <Typography>Our Stores</Typography>
                  <Typography>Cart</Typography>
                  <Typography>My Account</Typography>
                  <Typography>Wishlist</Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography className="fw-large" component="h6" mb={4}>
                Help
              </Typography>
              <Box className="text-muted">
                <Stack
                  sx={{
                    '& > *': {
                      fontSize: '14px',
                      color: 'text.disabled'
                    }
                  }}
                  direction="column"
                  spacing={2}
                >
                  <Typography component="p">Contact</Typography>
                  <Typography component="p">FaQs</Typography>
                  <Typography component="p">Resturns</Typography>
                  <Typography component="p">Shipping</Typography>
                  <Typography component="p">Guides</Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography className="fw-large" component="h6" mb={4}>
                Contact Us
              </Typography>
              <Box
                className="text-muted"
                sx={{
                  '& > *': {
                    fontSize: '14px',
                    color: 'text.disabled'
                  }
                }}
              >
                <Typography component="p">
                  70 Washington Square South, New York, NY 10012, United States
                </Typography>
                <Typography component="p">Email: uilib.help@gmail.com</Typography>
                <Typography component="p">Phone: +1 1123 456 780</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ borderTop: '2px solid #f3f3f3', paddingBottom: '50px' }}>
        <Box>
          <Stack direction="row" sx={{ paddingY: '30px' }}>
            <Box>
              <Typography sx={{ fontSize: 12, color: 'text.disabled' }} component="h6">
                Copyright © 2019 EngoTheme
              </Typography>
            </Box>
            <Box className="ms-auto">
              <Stack
                sx={{ '& > *': { fontSize: 12, color: 'text.disabled' } }}
                direction="row"
                spacing={3}
              >
                <Typography component="p">PRIVACY POLICY</Typography>
                <Typography component="p">TERMS OF SERVICES</Typography>
                <Typography component="p">AFFILIATION</Typography>
                <Typography component="p">SPONSORS</Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Footer;
