import React from "react";
import AppRouter from "router/AppRouter";
import "./style/GlobalStyles.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
