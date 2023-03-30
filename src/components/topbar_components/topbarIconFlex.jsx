import {
  IconButton,
  Box,
  Image,
  Text,
  Center,
  Flex,
  Icon,
} from "@chakra-ui/react";

export default function TopbarIconFlex({
  bg,
  pr,
  borderRadius,
  iconbg,
  icon,
  text,
}) {
  return (
    <Flex bg={bg} pr={pr} borderRadius={borderRadius}>
      <Center>
        <Box>
          <IconButton bg={iconbg} icon={icon} />
        </Box>
        <Box>{text}</Box>
      </Center>
    </Flex>
  );
}
