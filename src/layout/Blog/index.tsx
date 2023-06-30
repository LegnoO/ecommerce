/** @format */

import { Typography, Container, Grid, Stack, Box, Card, CardMedia, Button } from '@mui/material';
import { Wrapper } from '~/components/CustomTagName';

const Blog = () => {
  return (
    <>
      <Container sx={{ padding: '100px 0' }}>
        <Grid container sx={{ marginBottom: '100px' }}>
          <Grid item xs={4}>
            <Wrapper sx={{ width: '75%', margin: '0 auto' }}>
              <Typography sx={{ fontSize: 12, mb: 4 }} component="h6" color="text.disabled">
                LATEST NEWS
              </Typography>
              <Typography sx={{ fontSize: 48 }} className="fw-light" component="h3" color="primary">
                From Our Blog
              </Typography>
            </Wrapper>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box>
                  <CardMedia
                    component="img"
                    height={'270px'}
                    image="https://minim-demo.myshopify.com/cdn/shop/articles/blog-v3.jpg?v=1550120730"
                    alt=""
                  />

                  <Stack sx={{ height: '240px' }} spacing={2.2}>
                    <Typography
                      sx={{ fontSize: 12, color: 'text.disabled', marginTop: '30px' }}
                      className="text-uppercase lt-1 fw-bold"
                      component="h6"
                    >
                      architect
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, color: 'text.black' }}
                      className="fw-large"
                      component="h3"
                    >
                      House in Hamilton
                    </Typography>
                    <Typography
                      sx={{ lineHeight: '26px', fontSize: 14, color: 'text.disabled' }}
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consect etur sapien adipiscing elit. Mauris vel
                      auctorol....
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: 'text.disabled'
                      }}
                      className="fw-bold bg-transparent border-0"
                      component="button"
                      display="inline-flex"
                    >
                      Read More
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height={'270px'}
                    image="https://minim-demo.myshopify.com/cdn/shop/articles/blog-v2.jpg?v=1550117048"
                    alt=""
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Stack className="trending" direction="column" spacing={6} justifyContent="center">
          <Typography sx={{ fontSize: 36, mb: 3 }} className="text-center fw-light" component="h2">
            Trending on Instagram
          </Typography>
          <Grid container spacing={1.5}>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
          <Wrapper className="text-center">
            <Button
              className="fw-large border-circle text-normal"
              sx={{
                '&': {
                  color: 'common.black',
                  fontSize: 13,
                  backgroundColor: '#bdefd7',
                  paddingX: '20px'
                },
                '&:hover': {
                  color: 'common.white',
                  backgroundColor: 'primary.dark'
                }
              }}
            >
              Follow @minim.store
            </Button>
          </Wrapper>
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
