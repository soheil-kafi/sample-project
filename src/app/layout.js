import { ThemeProvider, Container, Box } from "@mui/material";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "./../theme";
import Navigator from "./components/navigator/navigator";
export const metadata = {
  title: "soheil-kafi",
  description: "sample project by sohiel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-color">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navigator />
            <Container>{children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
