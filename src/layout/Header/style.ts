

export const stylesPropsSx = {
    header: {
        navBar: {
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            zIndex: 1030,
            paddingY: "1.5rem",
            transition: "all 0.5s ease",
            backgroundColor: "rgba(255,255,255,0)",
        },
        navBarOpacity: {
            backgroundColor: "rgba(255,255,255,0.75)",
            boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
        },
        navItem: {
            color: 'common.black',
            fontSize: 14,
            fontWeight: "medium",
            cursor: 'pointer',
            textDecoration: "none",
            '&:hover': { color: 'primary.light' }
        },
        // responsive area
        navMobile: {
            position: 'fixed',
            inset: 0,
            zIndex: '1999',
            backgroundColor: '#fff',
            transition: 'all 0.75s ease',
        },
        menuButton: { display: { md: 'none', sm: 'flex', xs: 'flex' } },

    },
    searchBar: {
        root: {
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            width: '100%',
            backgroundColor: "common.white",
            zIndex: 1340,
            transition: 'all 0.75s ease',
        },
        container: {
            margin: '0 auto',
            borderRadius: "4px",
            border: '1px solid #000',
            width: "470px",
        },
        inputSearch: {
            '&': { width: "100%", },
            '& input': {
                padding: '0.5rem',
            }
        }
    }
}