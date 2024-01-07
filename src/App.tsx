import React from "react";
import AppRouter from "router/AppRouter";
import "./style/GlobalStyles.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RecoilRoot } from "recoil";
// eslint-disable-next-line import/no-extraneous-dependencies
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
