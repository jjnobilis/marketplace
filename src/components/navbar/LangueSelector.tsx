import {
  Box,
  Button,
  //   InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  //   Select,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const LangueSelector = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {"English" || "Englis"}
        </MenuButton>
        <MenuList>
          <MenuItem>English</MenuItem>
          <MenuItem>Français</MenuItem>
          <MenuItem>Deutch</MenuItem>
          <MenuItem>Italia</MenuItem>
        </MenuList>
      </Menu>

      {/* <InputGroup>
        <Select className="form-select" defaultValue="en">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="de">Deutch</option>
          <option value="it">Italia</option>
        </Select>
      </InputGroup> */}
    </Box>
  );
};

export default LangueSelector;
