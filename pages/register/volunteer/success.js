import Error from 'next/error'
import {
    Box,
    Input,
    Divider,
    Card,
    Container,
    Text,
    Button,
    Heading,
    Flex,
    Select,
    Textarea,
    Field,
    Grid, Image
} from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from "../../layout";

export default function Register({ notFound, registrationRecord, params }) {
    return <Layout>
        <Card px={[2, 4]} pb={[4, 4]} pt={[4,2]}>

            <Box my={3}>
                <Text variant={"title"} color={"primary"}>Thank you for signing up!</Text>
            </Box>

            <Box bg="sunken" p={3} mb={3} sx={{ borderRadius: 3 }}>
                <Text sx={{fontSize: "18px"}}>
                    You're now registered to volunteer at Ice Cream Social! ❤️🍦<br/><br/>
                    Make sure you check your email in
                    the coming days and weeks for important updates, and we can't wait to see you there!
                </Text>
            </Box>
        </Card>
    </Layout>

}
