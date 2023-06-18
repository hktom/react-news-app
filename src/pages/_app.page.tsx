// import "@/styles/globals.scss";
import store from "@/redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* <AppLayout> */}
          <Component {...pageProps} />
          {/* </AppLayout> */}
        </ThemeProvider>
      </Provider>
    </div>
  );
}
