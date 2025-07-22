import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

//----------------- SearchInput Component -----------------
const SearchInput = () => {
  // as we have a simple form here it is easier to use a ref to access the input value
  // rather than using useState and onChange handler
  const ref = useRef<HTMLInputElement>(null);


  // const {setSearchText} = useGameQueryStore(); // if I use this, any time, any value changes in useGameQueryStore, this component will re-render
  const setSearchText = useGameQueryStore(s => s.setSearchText) // If I use a selector, the component only dependent on setSearchText.

  //------------------ JSX ------------------
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
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
