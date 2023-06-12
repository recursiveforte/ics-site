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
      <Card
        px={[4, 4]}
        py={[0,0]}
        sx={{
          color: '#0b1a2e',
          textAlign: 'left',
          backgroundColor: "hsl(47, 77%, 95%)"
        }}
      >
        <Text sx={{ color: "primary", fontSize: '27px', fontWeight: "bold" }}>
          Thank you for signing up!
        </Text>
        <br /><br/>
        <Text>
          Your team is now registered for Ice Cream Social! ❤️🍦<br/><br/>
          Make sure you check your email in
          the coming days and weeks for important updates, and we can't wait to see you there!
        </Text>
      </Card>
      </Layout>
  )
}
