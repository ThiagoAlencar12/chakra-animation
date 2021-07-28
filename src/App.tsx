import { useState } from "react";
import { Flex, Stack, Icon, Button } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";

import { MotionFlex, animationFlex, itemAnimation } from './styles/animation';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleLoading() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Flex height="100vh" align="center" justify="center" direction="column">
      <MotionFlex
        alignItems="center"
        flexDir="column"
        padding="8"
        borderRadius="10"
        bg="gray.800"
        variants={animationFlex}
        initial="hidden"
        animate="visible"
      >
        <Logo width="auto" fontSize="4xl" />
        <MotionFlex
          mt="3"
          width="100%"
          maxWidth={400}
          flexDir="column"
          variants={itemAnimation}
        >
          <Stack spacing="5">
            <Input name="email" type="text" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
              <Button
                width="100%"
                type="button"
                onClick={handleLoading}
                isLoading={isLoading}
                loadingText="Aguarde..."
                spinnerPlacement="end"
                name="Entrar"
                color="gray.50"
                background="green.500"
                border="none"
                _focus={{ border: "none" }}
                _active={{ background: "green.600" }}
                _hover={{ background: "green.600" }}
              >
                Entrar
                <Icon as={FiLogIn} w={5} h={5} ml="2" />
              </Button>
          </Stack>
        </MotionFlex>
      </MotionFlex>
    </Flex>
  );
}
