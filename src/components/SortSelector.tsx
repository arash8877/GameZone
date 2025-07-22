import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

//---------------------------- PlatformSelector Component ----------------------------
const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // const {sortOrder} = useGameQueryStore(); if I use this, any time, any value changes in useGameQueryStore, this component will re-render
  const sortOrder = useGameQueryStore((s) => s.sortOrder); // If I use a selector, the component only renders when sortOrder changes.
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder); // If I use a selector, the component only renders when setSortOrder or sortOrder change.

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  //------------------ JSX --------------------
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
