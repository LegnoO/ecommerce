/** @format */

import { useState, useRef, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  width?: string;
  children: React.ReactNode;
  index?: number;
  styles?: { title: { [key: string]: string } };
  noTitle?: boolean;
  autoSlide?: boolean;
  delay?: number;
  slideIndex?: number;
}

const Carousel: React.FC<IProps> = ({
  width,
  children,
  styles,
  autoSlide = false,
  noTitle = false,
  delay = 3000,
  slideIndex = 0
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(slideIndex);
  const [nodeList, setNodeList] = useState<ChildNode[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setNodeList(Array.from(carouselRef.current.childNodes));
    }
  }, []);

  useEffect(() => {
    setCurrentSlide(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    let autoNextInterval: NodeJS.Timer;
    if (autoSlide) {
      autoNextInterval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev > 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, delay);
    }
    () => {
      clearInterval(autoNextInterval);
    };
  }, []);

  return (
    <>
      {noTitle ? (
        <></>
      ) : (
        <Stack sx={styles?.title} direction="row" spacing={2}>
          {nodeList.map((_, index) => {
            return (
              <Typography
                key={index}
                component="h2"
                sx={{ fontSize: '0.75rem' }}
                className={`cursor-pointer ${
                  index === currentSlide
                    ? 'text-dark fw-bold text-decoration-underline'
                    : 'text-muted'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                0{index + 1}
              </Typography>
            );
          })}
        </Stack>
      )}
      <Box sx={{ display: 'flex', overflow: 'hidden', width: width }}>
        <Stack
          ref={carouselRef}
          direction="row"
          sx={{
            '&': {
              display: 'flex',
              width: '100%',
              transform: `translateX(${currentSlide * -100}%)`,
              transition: 'all .65s ease'
            },
            '& > *': {
              minWidth: '100%'
            }
          }}
        >
          {children}
        </Stack>
      </Box>
    </>
  );
};

export default Carousel;
