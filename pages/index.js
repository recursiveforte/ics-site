import Logo from "../components/logo";
import Layout from "./layout";
import {Box, Button, Card, Flex, Grid, Image, Text} from "theme-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faIceCream, faMapPin} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {colors} from "../lib/theme";
import {useRouter} from "next/router";
import Link from "next/link";

const Icon = ({icon, viewboxX=0}) => <Text variant={"headline"} mb={0} mr={3} sx={{textAlign: "center"}}>
    <FontAwesomeIcon  viewBox={`${viewboxX} 0 512 512`} icon={icon} ></FontAwesomeIcon>
</Text>

export default () => {
    const router = useRouter()
    return <Layout>
        <Card px={[2, 4]} pb={[4, 4]} pt={[2,2]}>
            <Box pb={10} mt={3}>
            <Text variant={"title"} color={"primary"}>Vermont's First-Ever FRC Event!</Text>
                <Flex my={2} sx={{
                    flexDirection: "column",
                    //alignItems: "center"
                }}>
                    <Flex>
                        <Icon icon={faCalendar} viewboxX={-32}/>
                        <Text variant={"headline"} mb={0}>
                            September 16, 2023
                        </Text>
                    </Flex>
                    <Flex>
                        <Icon icon={faMapPin} viewboxX={-112} />
                        <Text variant={"headline"} mb={0}>
                            UVM's Patrick Gym, Burlington VT
                        </Text>

                    </Flex>
                    <Flex>
                        <Icon icon={faIceCream} viewboxX={-64} />
                        <Text variant={"headline"} mb={0}>
                            Free Ice Cream
                        </Text>

                    </Flex>

                </Flex>
                <Link href={"/register"}><Button mr={3} my={3} variant={"lg"}>Register!</Button></Link>
                <Link href={"mailto:team@greenmountainrobotics.org"}><Button my={3} variant={"lg"} backgroundColor={"primary"}>Contact</Button></Link>
            </Box>
        </Card>
    </Layout>
}