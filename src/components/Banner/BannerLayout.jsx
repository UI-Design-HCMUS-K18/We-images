import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const LayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function BannerLayout(props) {
  const { sxBackground, children, backgroundOptical, alignItems, justifyContent } = props;

  return (
    <LayoutRoot>
      <Box
        sx={{
          mt: 3,
          mb: 9,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: justifyContent,
          alignItems: alignItems,
          width: '150%'
        }}
      >   
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: backgroundOptical,
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} >
          
        </Background>
        
      </Box>
    </LayoutRoot>
  );
}

BannerLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default BannerLayout;
