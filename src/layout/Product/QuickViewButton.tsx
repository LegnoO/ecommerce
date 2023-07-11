/** @format */

import React from 'react';
import {
  Typography,
  CardMedia,
  CardContent,
  Container,
  Card,
  Grid,
  Rating,
  Box
} from '@mui/material';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const QuickViewButton: React.FC<IProps> = ({ children, className, onClick }) => {
  return (
    <Box
      onClick={onClick}
      className={`d-flex justify-content-center align-items-center ${className}`}
      sx={{
        '&': {
          height: '50px',
          width: '50px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          transition: 'all .5s ease',
          boxShadow: '0 3px 20px #0000001a'
        },
        '&:hover': {
          backgroundColor: 'primary.dark',
          color: 'common.white'
        }
      }}
    >
      {children}
    </Box>
  );
};

export default QuickViewButton;
