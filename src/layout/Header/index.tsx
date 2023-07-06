/** @format */

import { useState, useEffect, useRef } from 'react';
import { Navbar } from '~/components/CustomTagName';
import { stylesPropsSx } from './style';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import {
  Stack,
  IconButton,
  Divider,
  Typography,
  Badge,
  Container,
  Box,
  Theme
} from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import Image from '~/components/Image';
const Header = () => {
  const classes = stylesPropsSx.header;
  const headerElement = document.querySelector('.header');
  const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const headerHeight = headerElement?.clientHeight;
  const [openNavMenu, toggleNavMenu] = useState<boolean>(false);
  const bodyElement = document.querySelector('body');
  if (bodyElement) {
    const bodyStyle = bodyElement.style;
    bodyStyle.overflow = openNavMenu ? 'hidden' : 'auto';
  }

  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  useEffect(() => {
    // check md screen
    if (!isMediumScreen) {
      toggleNavMenu(false);
    }
  }, [isMediumScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NAV = ['Shop', 'Collection', 'Page', 'Blog', 'Contact'];

  const ICON_URL = [
    {
      src: '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconlogin.png?v=17151735571898987051552623697'
    },
    {
      src: '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconcar.png?v=19912236354837126781552623685',
      isCart: true
    }
  ];
  return (
    <>
      {/* <SearchBar />  */}
      <Box sx={{ ...classes.navBar, ...(isNavVisible && classes.navBarOpacity) }} component="header">
        <Container>
          <Navbar className="py-3 w-100">
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <a className="img-logo d-inline-block" href="#">
                <img
                  src="https://minim-demo.myshopify.com/cdn/shop/t/4/assets/logo.png?v=76281246793426370331552127529"
                  alt=""
                />
              </a>

              <Stack
                sx={{ display: { md: 'flex', sm: 'none', xs: 'none' } }}
                direction="row"
                alignItems="center"
                spacing={5}
              >
                {NAV.map((content, index) => {
                  return (
                    <Typography
                      sx={{
                        '&': { fontSize: 14, color: 'common.black' },
                        '&:hover': { color: 'primary.light' }
                      }}
                      key={index}
                      component="a"
                      className="cursor-pointer text-decoration-none fw-large"
                    >
                      {content}
                    </Typography>
                  );
                })}
              </Stack>

              <Stack
                sx={{ height: '100%', display: { md: 'flex', sm: 'none', xs: 'none' } }}
                direction="row"
                alignItems="center"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1}
              >
                <IconButton>
                  <Image
                    src="//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconsearch.png?v=143931648200267966671552623708"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                </IconButton>

                {ICON_URL.map((content, index) => {
                  return !content.isCart ? (
                    <IconButton key={index}>
                      <Image src={content.src} alt="" width="24px" height="24px" />
                    </IconButton>
                  ) : (
                    <IconButton key={index}>
                      <Badge badgeContent={4} color="success">
                        <Image src={content.src} alt="" width="24px" height="24px" />
                      </Badge>
                    </IconButton>
                  );
                })}
              </Stack>
              <IconButton
                sx={{ display: { md: 'none', sm: 'flex', xs: 'flex' } }}
                onClick={() => toggleNavMenu((prev) => !prev)}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Navbar>
        </Container>
      </Box>
      <Box
        className="nav-menu"
        sx={{
          ...classes.navMenu,
          mt: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
          width: openNavMenu ? '100%' : 0
        }}
      ></Box>
    </>
  );
};

export default Header;
