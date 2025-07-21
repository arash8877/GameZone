import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { PlatformProps } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: PlatformProps) => void;
  selectedPlatform?: PlatformProps | null;
}

//---------------------------- PlatformSelector Component ----------------------------
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  //------------------ JSX --------------------
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
