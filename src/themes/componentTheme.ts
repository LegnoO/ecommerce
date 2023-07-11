

const componentTheme = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: ["Poppins", "serif"].join(","),
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        // '@media(min-width: 600px) and (max-width: 899px)': {
        //   maxWidth: '900px',
        // },
        '@media(min-width: 600px)': {
          maxWidth: '600px',
        },
        '@media(min-width: 900px)': {
          maxWidth: '900px',
        },
        '@media(min-width: 1200px)': {
          maxWidth: '1200px',
        },

      }
    }
  }
};

export default componentTheme;
