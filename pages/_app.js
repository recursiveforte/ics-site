import * as React from 'react'
import NextApp from 'next/app'
import '../styles/app.css'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import {Box, Card, Container, Flex, Image, ThemeProvider, Text} from 'theme-ui'
import ForceTheme from '../components/force-theme'
import NProgress from '../components/nprogress'
import Meta from '../components/meta'
import Head from 'next/head'
import Link from "next/link";
import ColorSwitcher from "../components/color-switcher";
import {Analytics} from "@vercel/analytics/react";
import Layout from "./layout";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta
          as={Head}
          name="Ice Cream Social" // site name
          title="Ice Cream Social" // page title
          description="Ice Cream Social is Vermont's first FRC event! Coming September 16." // page description
          color="hsl(47, 77%, 95%)" // theme color
        />
        <NProgress color={'#ec3750'} />
        <ForceTheme theme="light" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                  <link
                      href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                      rel="stylesheet" />
          <div
            style={{
              margin: 0,
              zIndex: 1,
              minHeight: '100vh',
              width: '100vw',
              overflowY: 'scroll',
                backgroundColor: "hsl(47, 77%, 92%)"
            }}
          >
{/*              <div style={{
                  // backgroundImage: 'url("/vermont-farm.jpg")',
                  backgroundColor: "hsl(47, 77%, 95%)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom-left',
                  position: "fixed",
                  zIndex: -1,
                  width: "100vw",
                  height: "100vh"
              }}></div>*/}
              {/*<Component {...pageProps} />*/}
              <Layout>
                  <Card px={[2, 4]} pb={[4, 4]} pt={[2,2]}>
                      <Box pb={10} mt={3}>
              <Text variant={"title"}>Ice Cream Social has been canceled due to lack of signups. Thank you for your interest.</Text>
                      </Box>
                  </Card>
              </Layout>
          </div>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

          * {
            box-sizing: border-box;
          }
        `}
        </style>
          <Analytics />

      </ThemeProvider>
    )
  }
}
