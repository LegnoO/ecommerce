/** @format */

import { useState, useEffect } from 'react';

// Lib
import { Link } from 'react-router-dom';

// Material UI
import { ClickAwayListener } from '@mui/base';
import { LinkProps, Link as MuiLink } from '@mui/material';
import {
  Stack,
  IconButton,
  Divider,
  Typography,
  Badge,
  Container,
  Box,
  Theme,
  Input
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

// Component
import SearchBar from './SearchBar';
import Image from '~/components/Image';
import { useAppSelector } from '~/app/hooks';

// Styles
import { stylesPropsSx } from './style';

const Navbar = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const classes = stylesPropsSx.header;
  const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const headerElement = document.querySelector('.header__navbar');
  const headerHeight = headerElement?.clientHeight;
  const [openNavMenu, toggleNavMenu] = useState<boolean>(false);
  const [openSearchBar, toggleSearchBar] = useState<boolean>(false);
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
    } else {
      toggleSearchBar(false);
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

  return (
    <>
      <ClickAwayListener onClickAway={() => toggleSearchBar(false)}>
        <Box className="header">
          <SearchBar isToggle={openSearchBar} />
          <Box
            className="header__navbar"
            sx={{
              ...classes.navBar,
              ...(isNavVisible && classes.navBarOpacity),
              ...(isMediumScreen && { backgroundColor: '#fff' })
            }}
          >
            <Container>
              <Box sx={{ py: 2, width: '100%' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Link className="img__logo d-inline-block" to="#">
                    <Image
                      src="https://minim-demo.myshopify.com/cdn/shop/t/4/assets/logo.png?v=76281246793426370331552127529"
                      alt=""
                    />
                  </Link>

                  <Stack
                    sx={{ display: { md: 'flex', sm: 'none', xs: 'none' } }}
                    direction="row"
                    alignItems="center"
                    spacing={5}
                  >
                    {NAV.map((content, index) => {
                      return (
                        <Typography
                          sx={classes.navItem}
                          key={index}
                          component="a"
                          className="header__navbar--item"
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
                    <IconButton className="user__icon">
                      <Image
                        src="//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconlogin.png?v=17151735571898987051552623697"
                        alt=""
                        width="24px"
                        height="24px"
                      />
                    </IconButton>

                    <IconButton className="search__icon" onClick={() => toggleSearchBar(true)}>
                      <Image
                        src={
                          '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconsearch.png?v=143931648200267966671552623708'
                        }
                        alt=""
                        width="24px"
                        height="24px"
                      />
                    </IconButton>

                    <IconButton className="cart__icon">
                      <Badge badgeContent={cart.length} color="success">
                        <Image
                          src={
                            '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconcar.png?v=19912236354837126781552623685'
                          }
                          alt=""
                          width="24px"
                          height="24px"
                        />
                      </Badge>
                    </IconButton>
                  </Stack>
                  <IconButton
                    sx={{ display: { md: 'none', sm: 'flex', xs: 'flex' } }}
                    onClick={() => toggleNavMenu((prev) => !prev)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Container>
          </Box>
        </Box>
      </ClickAwayListener>
      <Box
        className="header__navbar-mobile"
        sx={{
          ...classes.navMobile,
          mt: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
          width: openNavMenu ? '100%' : 0
        }}
      ></Box>
    </>
  );
};

export default Navbar;
