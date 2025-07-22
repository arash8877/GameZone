import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

//---------------------------- PlatformSelector Component ----------------------------
const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  // const {selectedPlatform, setPlatform} = useGameQueryStore();  If I use this, any time, any value changes in useGameQueryStore, this component will re-render
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform); // If I use a selector, the component only dependent on selectedPlatform.
  const setPlatform = useGameQueryStore((s) => s.setPlatform); // If I use a selector, the component only dependent on setPlatform and selectedPlatform.

  if (error) return null;

  //------------------ JSX --------------------
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
