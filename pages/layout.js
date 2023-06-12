import {Box, Card, Container, Flex, Image, Text} from "theme-ui";
import Link from "next/link";
import * as React from "react";
import Logo from "../components/logo";

export default ({children}) => <>
    <Logo/>

    <Container pt={0} pb={2} variant="wide" sx={{
        borderWidth: "10px",
        borderColor: "black"
    }}>
        {children}
        <Box py={[3,3]} mt={3} mb={2} sx={{
            textAlign: "right",
        }}>
            <Text variant={"subtitle"} sx={{            fontWeight: "bold",
            }}>
            Made with ❤️ by <Link href={"https://greenmountainrobotics.org"}>Green Mountain Robotics 9101</Link> & <Link href={"https://rutlandrobotics.org"}>iBots 2370</Link>
            </Text>
            </Box>
    </Container>
</>