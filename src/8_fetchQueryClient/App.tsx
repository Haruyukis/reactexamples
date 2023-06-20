import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatData } from "./CatData";

function App(): JSX.Element {

  const clientInterval = new QueryClient({
    defaultOptions: {queries: {refetchInterval : 1000}} // ⚠️ Client configuration : Refetch each 1000ms.
  });

  const clientOnlyRefresh = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus : false}} // ⚠️ Client configuration : Don't refetch when changing window.
  });

  return (
    <div className="App">
      <QueryClientProvider client={clientInterval}>
        <CatData />
      </QueryClientProvider>

      <QueryClientProvider client={clientOnlyRefresh}>
        <CatData />
      </QueryClientProvider>
    </div>
  );
}

export default App;
