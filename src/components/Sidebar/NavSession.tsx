import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from 'react'

interface NavSessionProps {
    title: string;
    children: ReactNode;
}

export function NavSession({ title, children }: NavSessionProps){
    return(
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
        <Stack spacing="4" mt="8" align="stretch">
           {children}
        </Stack>
    </Box>
    )
}