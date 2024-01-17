import { type ChangeEvent, useState } from "react";

export const useNursery = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return {searchTerm, handleSearch}
}