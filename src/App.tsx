import { Suspense } from "react";
import { Routes } from "./routes/Routes";
import { Spinner } from "./components/spinner/Spinner";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Routes />
    </Suspense>
  )
}

export default App;