import React from 'react';
import {
  Typography,
  IconButton,
  Container,
  Card,
  Grid,
  Box,
  Stack,
  Button,
  Rating
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Breadcrumb from '~/components/Breadcrumb';

type IProps = {
  quantity: number | string;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
};

const QuantityButton: React.FC<IProps> = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <>
      <Stack
        sx={{
          width: 'fit-content',
          alignItems: 'center',
          outline: '1px solid #e6e6e6'
        }}
        direction="row"
        spacing={0.5}
      >
        <IconButton onClick={decreaseQuantity}>
          <ArrowDropDownIcon />
        </IconButton>
        <Typography
          component="p"
          sx={{
            textAlign: 'center',
            width: '24px',
            color: 'none',
            height: 'fit-content'
          }}
        >
          {quantity}
        </Typography>
        <IconButton onClick={increaseQuantity}>
          <ArrowDropUpIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default QuantityButton;
