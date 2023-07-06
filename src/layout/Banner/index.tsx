/** @format */

import { Typography, Chip, Container, Grid, Fab, Stack, Box } from '@mui/material';
import { Wrapper } from '~/components/CustomTagName';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Banner = () => {
  return (
    <>
      <Wrapper id="banner" className="position-relative break-section">
        <img
          className="w-100"
          src="//minim-demo.myshopify.com/cdn/shop/files/bg-slide2-v1.png?v=1614310209"
        />
        <div style={{ top: '18%' }} className="position-absolute w-100 text-center">
          <Typography
            className="fw-large"
            sx={{ fontSize: 12, color: '#84c7a6', letterSpacing: 2 }}
            component="h6"
            display="block"
          >
            WELCOME TO MINIM
          </Typography>

          <Typography
            sx={{ fontSize: 56, color: '#3e976b' }}
            className="mt-3 mb-4 fw-light"
            component="h2"
          >
            Art with an attitude
          </Typography>

          <Chip
            style={{ height: '40px' }}
            sx={{
              '&': { fontSize: 13, color: 'common.black', backgroundColor: 'secondary.light' },
              '&:hover': { color: 'common.white', backgroundColor: 'primary.dark' }
            }}
            className="p-2 cursor-pointer fw-large lt-1"
            label="Discover Now"
            color="primary"
          />
        </div>
      </Wrapper>
      <Wrapper id="showcase">
        <Container sx={{ marginBottom: '80px' }}>
          <Grid container spacing={5}>
            <Grid item container alignItems="center" xs={6}>
              <Box sx={{ marginLeft: '7rem' }} className="w-60">
                <Typography
                  className="fw-light"
                  sx={{ fontSize: 48, color: '#3e976b' }}
                  component="h3"
                  mb={4}
                >
                  Furnishing Your Dreams
                </Typography>
                <Typography
                  sx={{ width: '85%', fontSize: 14, color: 'text.disabled' }}
                  className="text-capitalize"
                  component="p"
                >
                  We’ve Got Everything To Help You Create A Living Room That’s Ready For
                  Entertaining.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="overflow-hidden position-relative">
                <img
                  className="hover-zoom-out"
                  src="https://minim-demo.myshopify.com/cdn/shop/files/banner3-v3_bdafb88b-2acf-45e4-b4b2-9fd9488f6512.jpg?v=1614310230"
                  alt=""
                />
                <Box className="position-absolute top-25 left-10">
                  <Typography className="text-black mb-3" variant="h5">
                    Home Decor
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Fab
                      sx={{ width: '30px', height: '30px', minHeight: '30px' }}
                      size="small"
                      className="shadow-none"
                    >
                      <KeyboardArrowRightIcon className="text-muted" sx={{ fontSize: 14 }} />
                    </Fab>
                    <Typography
                      component="a"
                      sx={{ fontSize: 14, color: 'text.disabled' }}
                      className="fw-large"
                    >
                      Shop now
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Stack direction="column">
                <Box className="h-50 text-end translateY-15">
                  <img
                    src="https://minim-demo.myshopify.com/cdn/shop/files/banner3-v1.png?v=1614310226"
                    alt=""
                  />
                </Box>
                <Box className="h-50 overflow-hidden position-relative">
                  <img
                    className="hover-zoom-out"
                    src="https://minim-demo.myshopify.com/cdn/shop/files/banner3-v3_bdafb88b-2acf-45e4-b4b2-9fd9488f6512.jpg?v=1614310230"
                    alt=""
                  />
                  <Box className="position-absolute top-25 left-10">
                    <Typography className="text-black mb-3" variant="h5">
                      Bathroom
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Fab
                        sx={{ width: '30px', height: '30px', minHeight: '30px' }}
                        size="small"
                        className="shadow-none"
                      >
                        <KeyboardArrowRightIcon className="text-muted" sx={{ fontSize: 14 }} />
                      </Fab>
                      <Typography
                        component="a"
                        sx={{ fontSize: 14, color: 'text.disabled' }}
                        className="fw-large"
                      >
                        Shop now
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box className="h-100 overflow-hidden position-relative">
                <img
                  className="h-100 hover-zoom-out"
                  src="https://minim-demo.myshopify.com/cdn/shop/files/banner3-v4.jpg?v=1614310230"
                  alt=""
                />

                <Box className="position-absolute top-25 left-10">
                  <Typography className="text-black mb-3" variant="h5">
                    Dining Chairs
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Fab
                      sx={{ width: '30px', height: '30px', minHeight: '30px' }}
                      size="small"
                      className="shadow-none"
                    >
                      <KeyboardArrowRightIcon className="text-muted" sx={{ fontSize: 14 }} />
                    </Fab>
                    <Typography
                      component="a"
                      sx={{ fontSize: 14, color: 'text.disabled' }}
                      className="fw-large"
                    >
                      Shop now
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default Banner;
