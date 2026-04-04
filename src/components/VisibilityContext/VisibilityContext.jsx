import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isPortfolioUnlocked, setIsPortfolioUnlocked] = useState(() => {
        return sessionStorage.getItem("site_context") === "personal";
    });

    useEffect(() => {
        if(searchParams.get("context") === "personal") {
            setIsPortfolioUnlocked(true);
            sessionStorage.setItem("site_context", "personal");
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("context");
            setSearchParams(newParams, { replace: true });
        }
    }, [searchParams, setSearchParams]);

    return (
        <VisibilityContext.Provider value={{ isPortfolioUnlocked }}>
            {children}
        </VisibilityContext.Provider>
    );
};

export const useVisibility = () => useContext(VisibilityContext);