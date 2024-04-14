import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Logo from "./Logo";

const MenuItem = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

export const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center">
        <Logo height={44} />
      </Flex>

      <Box flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem>
            <ColorModeSwitcher />
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};
