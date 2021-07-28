import { Text, TextProps, Icon } from "@chakra-ui/react";
import { FiFramer } from "react-icons/fi";
import { MotionFlex, itemAnimation } from "../styles/animation";

type LogoProps = TextProps;

export function Logo({ ...rest }: LogoProps) {
  return (
    <MotionFlex variants={itemAnimation}>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="wide"
        color="gray.50"
        width="64"
        {...rest}
      >
        Chakra
        <Text as="span" color="green.400" marginLeft="1">
          Animation
          <Icon as={FiFramer} ml="2" />
        </Text>
      </Text>
    </MotionFlex>
  );
}
