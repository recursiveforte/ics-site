import {Box, Card, Container, Flex, Image} from "theme-ui";
import Link from "next/link";
import * as React from "react";

export default () =>
    <Container variant={"wide"} pt={4}>
    <Box
    px={[4, 100]}
    pb={[2,2]}
    pt={[2,4]}
    sx={{
        cursor: "pointer"
    }}
    backgroundColor={"transparent"}
>

        <Link href={"/"} py={0}>

            <Flex sx={{ alignItems: 'center', flexGrow: 1 }}>
                <Image src={"/Color Logo.png"}></Image>

            </Flex>
        </Link>

</Box>
    </Container>
