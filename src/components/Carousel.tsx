/** @format */

import { useState, useRef, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { Wrapper } from './CustomTagName';

interface IProps {
  width: string;
  children: React.ReactNode;
  styles?: { title: { [key: string]: string } };
}

const Carousel: React.FC<IProps> = ({ width, children, styles }) => {
  const [currentIndex, setIndex] = useState<number>(0);
  const [nodeList, setNodeList] = useState<ChildNode[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const nodes = Array.from(carouselRef.current.childNodes);
      setNodeList(nodes);
    }
  }, []);

  return (
    <>
      <Stack sx={styles?.title} direction="row" spacing={2}>
        {nodeList.map((_, index) => {
          return (
            <Typography
              sx={{ fontSize: '12px' }}
              variant="body2"
              key={index}
              className={`cursor-pointer${
                index === currentIndex
                  ? ' text-dark fw-bold text-decoration-underline'
                  : ' text-muted'
              }`}
              onClick={() => setIndex(index)}
            >
              0{index + 1}
            </Typography>
          );
        })}
      </Stack>
      <Wrapper className="d-flex overflow-hidden" sx={{ width }}>
        <Stack
          ref={carouselRef}
          direction="row"
          sx={{
            '& > *': {
              minWidth: '100%'
            },
            transform: `translateX(${currentIndex * -100}%)`,
            transition: 'all .65s ease'
          }}
          className="w-100 d-flex"
        >
          {children}
        </Stack>
      </Wrapper>
    </>
  );
};

export default Carousel;
