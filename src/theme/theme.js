import { createTheme } from '@mui/material/styles';

export default createTheme({
    custom: {
        logo: {
            width: "40px", 
            height: "40px",
        }
    },
    components: {
        MuiContainer:{
            styleOverrides: {
                root: {
                    padding: "5% 14%",
                    textAlign: "center"
                }
            }
        },
        MuiGrid: {
            padding: "0"
        }, 

    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: "#000"
            }
        }
    },
    
    palette: {
        primary: {
            main:'#B5FE83' 
        },
        text: {
            primary: '#000',
            secondary: '#F7F7F7'
        },
        background: {
            paper: '#F7F7F7',
            default: '#B5FE83',
        }
    },

    typography: {
        fontFamily: 'Manrope, Open Sans, Roboto, sans-serif',
        
        h1: {
            fontWeight: "bold"
        },
        h2: {
            fontWeight: "bold"
        },
        h3: {
            fontWeight: "bold"
        },
    },
});
