/** @format */
import { Box } from '@mui/material';
import { Footer, Navbar } from '~/layouts';

interface Props {
  children: React.ReactNode;
}

const index: React.FC<Props> = ({ children }) => {
  const pathName = window.location.pathname;
  return (
    <>
      <Navbar isFixed={pathName === "/"}/>
      <Box className="wrapper">{children}</Box>
      <Footer />
    </>
  );
};

export default index;
