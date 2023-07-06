import React from 'react';
import { stylesPropsSx } from './style';
import {
  Stack,
  IconButton,
  Divider,
  Typography,
  Container,
  Box,
  Input
} from '@mui/material';
const SearchBar = () => {
  const classes = stylesPropsSx.searchBar;

  return (
    <Box sx={classes.root}>
      <Container>
        <Box sx={classes.container}>
        <Stack direction="row"> 
         <Input
            sx={classes.inputSearch}
            type={'text'}
            placeholder="Search"
            size="small"
            disableUnderline
          />
          <div>abc</div>
        </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchBar;
