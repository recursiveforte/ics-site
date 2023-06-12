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
import theme, {colors} from "../../lib/theme";
import Layout from "../layout";

export default function Register({ notFound, registrationRecord, params }) {
  return (
      <Layout>
        <Card px={[2, 4]} pb={[4, 4]} pt={[2,2]}>
            <Box pb={10} mt={3}>

        <Text sx={{ color: "primary"}} variant={"title"}>
          Thank you for signing up!
        </Text>
        <br /><br/>
            <Text sx={{fontSize: "18px"}}>
          Your team is now registered for Ice Cream Social! ❤️🍦<br/><br/>
          Make sure you check your email in
          the coming days and weeks for important updates, and we can't wait to see you there!
        </Text>
            </Box>
      </Card>
      </Layout>
  )
}
