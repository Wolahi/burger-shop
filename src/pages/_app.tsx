import { Provider } from "react-redux";
import "../style/global.scss";
import type { AppProps } from "next/app";
import { store } from "../store/store";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
