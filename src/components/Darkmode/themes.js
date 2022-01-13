import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  
};

export const darkTheme = {
  black: "#000",
  white: "#fff",
  green: "#05F240",
};

export const GlobalStyles = createGlobalStyle`
	body{
		background-color: ${(props) => props.theme.black};
	} 

  caption{
    font-color: ${(props) => props.theme.black};
  }

.user-login__submit-button{
  background-color: ${(props) => props.theme.black};
}

.user-login__submit-button-entrar{
  background-color: ${(props) => props.theme.black};
}

.user-login__submit-button-buscar{
  background-color: ${(props) => props.theme.black};
}

.btnHome{
  background-color: ${(props) => props.theme.black};
}

.bg-cadastro{
  background-color: ${(props) => props.theme.black};
}

.navbar{
  background-color: ${(props) => props.theme.black};
}

.base-card{
  background-color: ${(props) => props.theme.green};
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
label,
th,
icon {
  color: ${(props) => props.theme.black};
}

`;