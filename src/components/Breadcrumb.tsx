import React, { Fragment } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SxProps } from '@mui/system';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  sx?: SxProps;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, sx }) => {
  return (
    <Box sx={{ paddingY: 3.75, marginBottom: 4, ...sx }}>
      <Stack direction="row">
        {items.map((label, index) => {
          return (
            <Fragment key={index}>
              {label.link ? (
                <>
                  <Link key={index} to={label.link}>
                    <Typography>{label.label}</Typography>
                  </Link>
                  {index !== items.length - 1 && <Typography sx={{ marginX: 1 }}>/</Typography>}
                </>
              ) : (
                <Typography key={index}>{label.label}</Typography>
              )}
            </Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Breadcrumb;
