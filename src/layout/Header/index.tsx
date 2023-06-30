/** @format */

import { useState, useEffect } from 'react';
import { Stack, IconButton, Divider, Typography, Badge, Container } from '@mui/material';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NAV = ['Shop', 'Collection', 'Page', 'Blog', 'Contact'];

  const ICON_URL = [
    {
      src: '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconsearch.png?v=143931648200267966671552623708'
    },
    {
      src: '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconlogin.png?v=17151735571898987051552623697'
    },
    {
      src: '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconcar.png?v=19912236354837126781552623685',
      isCart: true
    }
  ];
  return (
    <header
      className={`${
        isNavVisible ? 'bg-opacity-75 bg-white shadow-sm' : 'bg-opacity-0'
      } py-4 fixed-top delay-05`}
    >
      <Container>
        <nav className="py-3 w-100">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <a className="img-logo d-inline-block" href="#">
              <img
                src="https://minim-demo.myshopify.com/cdn/shop/t/4/assets/logo.png?v=76281246793426370331552127529"
                alt=""
              />
            </a>

            <Stack direction="row" alignItems="center" spacing={5}>
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
              className="h-100"
              direction="row"
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              {ICON_URL.map((content, index) => {
                return !content.isCart ? (
                  <IconButton key={index}>
                    <img src={content.src} className="" />
                  </IconButton>
                ) : (
                  <IconButton key={index}>
                    <Badge badgeContent={4} color="success">
                      <img src={content.src} className="" />
                    </Badge>
                  </IconButton>
                );
              })}
            </Stack>
          </Stack>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
