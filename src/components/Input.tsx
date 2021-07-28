import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { MotionFlex, itemAnimation } from "../styles/animation";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <MotionFlex variants={itemAnimation}>
      <FormControl>
        {label && (
          <FormLabel color="gray.50" htmlFor={name}>
            {label}
          </FormLabel>
        )}
        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="green.500"
          color="gray.50"
          bgColor="gray.700"
          variant="filled"
          size="lg"
          _hover={{ bgColor: "gray.600" }}
          {...rest}
        />
      </FormControl>
    </MotionFlex>
  );
}
