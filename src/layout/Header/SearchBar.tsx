import { useState, useEffect, useRef, forwardRef } from 'react';

// styles
import { stylesPropsSx } from './style';

// Material UI
import { Stack, IconButton, Typography, Container, Box, Input } from '@mui/material';

// Component
import Image from '~/components/Image';

// FontAwesomeIcon Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Interface Props
interface IProps {
  isToggle: boolean;
}

const SearchBar: React.FC<IProps> = forwardRef(({ isToggle = false }, ref) => {
  // use forwardRef to use API ClickAnyway
  const classes = stylesPropsSx.searchBar;
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (!isToggle) {
      setSearchValue('');
    }
  }, [isToggle]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchTerm = event.target.value;
    if (!searchTerm.startsWith(' ')) {
      setSearchValue(searchTerm);
    }
  };

  const handleEmptySearch = () => {
    const inputChild = inputRef?.current?.querySelector<HTMLInputElement>('input');
    setSearchValue('');
    inputChild?.focus();
  };

  return (
    <Box
      ref={ref}
      className="search__bar"
      sx={{ ...classes.root, height: isToggle ? '120px' : '0px', opacity: isToggle ? '1' : '0' }}
    >
      <Container>
        <Box sx={classes.container}>
          <Stack direction="row">
            <Input
              ref={inputRef}
              autoFocus
              className="search__input"
              onChange={handleChange}
              sx={classes.inputSearch}
              type={'text'}
              placeholder="Search..."
              size="small"
              disableUnderline
              spellCheck={false}
              value={searchValue}
            />

            {searchValue.length > 0 ? (
              <IconButton onClick={handleEmptySearch} className="cancel__icon">
                <FontAwesomeIcon icon={faXmark} />
              </IconButton>
            ) : (
              <IconButton className="search__icon">
                <Image
                  src={
                    '//minim-demo.myshopify.com/cdn/shop/t/4/assets/iconsearch.png?v=143931648200267966671552623708'
                  }
                  alt=""
                  sx={{ width: '24px', height: '24px' }}
                />
              </IconButton>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
});

export default SearchBar;
