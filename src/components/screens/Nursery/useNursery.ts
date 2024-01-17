import { type ChangeEvent, useState } from "react";

export const useNursery = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentNursery, setCurrentNursery] = useState("Golden Stepway");

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    
    const changeCurrencyValue = (value: string) => {
        setCurrentNursery(value);
      };

    return {searchTerm, handleSearch, changeCurrencyValue, currentNursery}
}