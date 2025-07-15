import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // as we have a simple form here it is easier to use a ref to access the input value
  // rather than using useState and onChange handler

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          console.log("Search Input Value:", ref.current.value);
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
