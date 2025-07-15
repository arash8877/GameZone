import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

//----------------- SearchInput Component -----------------
const SearchInput = ({ onSearch }: SearchInputProps) => {
  // as we have a simple form here it is easier to use a ref to access the input value
  // rather than using useState and onChange handler
  const ref = useRef<HTMLInputElement>(null);

  //------------------ JSX ------------------
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />;
      </InputGroup>
    </form>
  );
};

export default SearchInput;
