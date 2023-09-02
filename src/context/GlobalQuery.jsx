import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const contextQuery = new QueryClient()

const GlobalQuery = ({ children }) => {
  return (
    <QueryClientProvider client={contextQuery}>
        { children }
    </QueryClientProvider>
  )
}

export default GlobalQuery