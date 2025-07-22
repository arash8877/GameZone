import { create } from "zustand";
import { GenreProps } from "./hooks/useGenres";
import { PlatformProps } from "./hooks/usePlatforms";




interface iGameQuery {
    selectedGenre: GenreProps | null;
    selectedPlatform: PlatformProps | null;
    sortOrder: string;
    searchText: string;
    setGenre: (genre: GenreProps | null) => void;
    setPlatform: (platform: PlatformProps | null) => void;
    setSortOrder: (order: string) => void;
    setSearchText: (text: string) => void;
}


const useGameQueryStore = create<iGameQuery>((set) => ({
    selectedGenre: null, 
    selectedPlatform: null,
    sortOrder: "",
    searchText: "",
    setGenre: (genre) => set(() => ({ selectedGenre: genre })),
    setPlatform: (platform) => set(() => ({ selectedPlatform: platform })),
    setSortOrder: (order) => set(() => ({ sortOrder: order })),
    setSearchText: (text) => set(() => ({ searchText: text }))
}))

export default useGameQueryStore;