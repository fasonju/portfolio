import { init } from "@emailjs/browser";
import "../styles/globals.css";

import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { EMAILJS_PUBLIC_KEY } from "../constants/constants";

const queryClient = new QueryClient();
init({
  publicKey: EMAILJS_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 1s
    throttle: 1000,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
