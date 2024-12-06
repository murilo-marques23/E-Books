import { Box, Text } from "@chakra-ui/react";

export default function PaymentSucess(){
    return <Box p={8} h={ "53vh"}>
                        <Text color="blue.500" fontWeight="bold" mt={4}>
                    Compra finalizada com sucesso!
                </Text>
    </Box>
}