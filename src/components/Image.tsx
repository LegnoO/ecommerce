import { useState } from 'react';
import { styled } from '@mui/system';
interface IProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  sx?: { [x: string]: any };
  [x: string]: any;
}

const Img = styled('img')({});

const Image: React.FC<IProps> = ({
  src,
  alt = '',
  width = 'auto',
  height = 'auto',
  sx,
  ...props
}) => {
  const [fallBack, setFallBack] = useState<string>('');
  const handleError = () => {
    setFallBack(
      'https://invisiblechildren.com/wp-content/uploads/2012/07/facebook-profile-picture-no-pic-avatar.jpg'
    );
  };

  return (
    <Img
      sx={{
        '&': {
          overflow: 'hidden',
          width,
          height
        },
        ...sx
      }}
      src={fallBack || src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
