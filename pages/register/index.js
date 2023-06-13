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
import Icon from '@hackclub/icons'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { manifest, requiredList } from '../../lib/manifest.js'
import nookies from 'nookies'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-nextjs-toast'
import theme, {colors} from "../../lib/theme";
import Layout from "../layout";

export default function Register({ notFound, registrationRecord, params }) {
  const [data, setData] = useState({})
  const [disabled, setDisabled] = useState(false);

  let keys = manifest.questions.flatMap(x => x.items.map(y => y.key))

  const router = useRouter()

  if (notFound) {
    return <Error statusCode="404" />
  }
  return (
    <Layout>
      <ToastContainer align="right" />
      <Card px={[2, 4]} pb={[4, 4]} pt={[4,2]} sx={{
          boxShadow: "none",
      }}>
          <Box my={3}><Text variant={"title"} color={"primary"}>Registration</Text></Box>
          <Box bg="sunken" p={3} mb={3} sx={{ borderRadius: 3 }}>
              <Text sx={{fontSize: "18px"}}>
              Thank you for your interest in Ice Cream Social! We're CHARGED UP to be running this event.
              <br/><br/>This event is planned to happen on Saturday, September 16,
              with load-in starting the evening before.
                  <br/><br/>Feel free to email <Link href={"mailto:team@greenmountainrobotics.org"}>team@greenmountainrobotics.org</Link> with any questions!
              </Text>
          </Box>
        {manifest.questions.map((sectionItem, sectionIndex) => {
          if (typeof sectionItem.check != 'undefined') {
            if (sectionItem.check(data)) {
              return null
            }
          }
          return (
            <Box
              key={sectionIndex}
              sx={{ mb: sectionIndex == manifest.questions.length -1 ? 4 : 5, mt: sectionIndex == 0 ? 4 : 5 }}
            >

                <Box sx={{ textAlign: 'left', mb: 2 }}>
                <Text sx={{ color: "primary", fontSize: '27px', fontWeight: "bold" }}>
                  {sectionItem['header']}
                </Text>
              </Box>
              <Box>
                {sectionItem.label && (
                  <Box sx={{ color: 'muted', mb: 3 }}>
                    {sectionItem['label']}
                  </Box>
                )}
                {sectionItem.items.map((item, index) => {
                  if (typeof item.check != 'undefined') {
                    if (item.check(data)) {
                      return null
                    }
                  }
                  return (
                    <Box
                      mt={1}
                      mb={4}
                      key={'form-item-' + sectionIndex + '-' + index}
                    >
                      <Field
                        label={
                          <>
                            <Text
                              mb={1}
                              sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              {item['label']}{' '}
                              <Text
                                as="small"
                                sx={{
                                  color: 'muted',
                                  display: item.optional ? 'inline' : 'none',
                                  fontSize: '13px'
                                }}
                              >
                                (Optional)
                              </Text>
                            </Text>
                            {item.sublabel && (
                              <Text
                                sx={{
                                  fontSize: '15px',
                                  color: '#555',
                                  fontWeight: '500',
                                  mb: 2,
                                  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`
                                }}
                                as="p"
                              >
                                {item['sublabel']}
                              </Text>
                            )}
                          </>
                        }
                        onChange={e => {
                          let newData = {}
                          newData[item.key] = e.target.value
                          setData({ ...data, ...newData })
                        }}
                        placeholder={item['placeholder']}
                        as={
                          item.type == 'string'
                            ? Input
                            : item.type == 'paragraph'
                            ? Textarea
                            : item.inputType == 'checkbox'
                            ? Input
                            : Select
                        }
                        type={item.inputType}
                        required={!item.optional}
                        value={
                          data[item.key] !== undefined ? data[item.key] : ''
                        }
                        sx={{
                          border: '1px solid',
                            backgroundColor: "snow",
                          borderColor: 'border',
                          resize: 'vertical',
                          display:
                            item.inputType == 'checkbox'
                              ? '-webkit-box'
                              : 'block'
                        }}
                        {...(item.type == 'select'
                          ? item.options
                            ? {
                                children: (
                                  <>
                                    <option value="" disabled>
                                      Select One
                                    </option>
                                    {item['options'].map(option => (
                                      <option key={option}>{option}</option>
                                    ))}
                                  </>
                                )
                              }
                            : {
                                children: <></>
                              }
                          : {})}
                      />
                      {item.words && (
                        <Text
                          sx={{ fontSize: '18px', color: 'muted', mt: 1 }}
                          as="p"
                        >
                          ( Aim for about {item.words} words
                          {data[item.key] &&
                          ', ' +
                            data[item.key].split(' ').length +
                            ' ' +
                            data[item.key].split(' ').length ==
                            1
                            ? 'word'
                            : 'words' + ' ' + 'so far.'}
                          )
                        </Text>
                      )}
                    </Box>
                  )
                })}
              </Box>
            </Box>
          )
        })}
        <Button
          onClick={() => {
            setDisabled(true);
            toast.notify('Submitting your registration...', { duration: 60, title: 'Working...' })
            console.log(data)
            fetch('/api/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
              .then(response => response.json())
              .then(
                ({ success, error }) => {
                  setDisabled(false);
                  success ? window.location.replace('/register/success') : toast.notify(error, { type: 'error', title: 'Oops!', duration: 60 })
                }
              )
          }}
          bg="green"
          disabled={false}
        >
          Submit
        </Button>
      </Card>
    </Layout>
  )
}
