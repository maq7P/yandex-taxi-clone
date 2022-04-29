import { FC, useState, useEffect  } from "react";
import Script from 'next/script';

import Loader from "../ui/Loader";

import Seo from "./Seo";

import { ILayout } from "./types";

const Layout:FC<ILayout> = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000);

    return () => clearTimeout(timeout)
  }, [])
  return (
    <div>
      <Seo/>

      <Script 
        strategy="beforeInteractive" 
        src={`https://maps:googleapis.com/map/api/js?key=${process.env.MAP_KEY}&libraries=place`}
      />

      <div 
        style={{maxWidth: 480, maxHeight: 900}}
        className="mx-auto relative overflow-hidden"
      >
        adas
        {isLoading ? <Loader/>: children}
      </div>

    </div>
  );
};

export default Layout;