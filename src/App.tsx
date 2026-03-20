// import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "./pages/MainLayout.tsx";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    // This is for dark mode if needed
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <MainLayout />
    // </ThemeProvider>
  );
}

export default App;
