import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

const App = () => {
	const [locale, setLocale] = useState();

  const theme = createTheme(
    {
      scrollbarStyles: {
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          boxShadow: 'inset 0 0 6px rgba(170, 0, 126, 126)',
          backgroundColor: '#446ffc',
        },
      },
      palette: {
        primary: { main: "#446ffc" },
        third: { main: "#d17308" }
      },

      barraSuperior: {
        primary: { main: "linear-gradient(to right, #446ffc 100%, #446ffc 26%, #446ffc 100%)" },
        secondary: { main: "#000000" },
      },

      barraLateral: {
        primary: { main: "#e3e5e8" },
      },

      icons: {
        primary: { main: "#446ffc" }
      },
      textColorMenu: {
        primary: { main: "#FFFFFF" },
        secondary: { main: "#446ffc" }
      
      },    },
    locale
  );

	useEffect(() => {
		const i18nlocale = localStorage.getItem("i18nextLng");
		const browserLocale =
			i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

		if (browserLocale === "ptBR") {
			setLocale(ptBR);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;
