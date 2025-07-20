import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App";
import theme from "./theme";
import { FaLaptopHouse } from "react-icons/fa";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 300000, // Garbage Collection Time -  After 5 minutes of no component using the query, the cached data will be deleted.
      staleTime: 10* 1000, // After 10 seconds of no component using the query, the data will be considered stale and will be refetched on next use.
      refetchOnReconnect: true,
      refetchOnMount: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
