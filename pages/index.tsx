import React from 'react'
import Link from 'next/link'
import { Login, Logout, auth } from "lib/firebase"
import { Box, Heading } from "@chakra-ui/layout"
import Button from 'components/Button'

const IndexPage = () => (
  <Box>
    <Heading>hellooo</Heading>
    <Link href="/tags">tags</Link>
    <div>
      <Button
        callback={Login}
        label='ログイン'
      />
      <Button
        callback={Logout}
        label='ログアウト'
      />
    </div>
    <div>
      <pre>
        {auth.currentUser
          ? auth.currentUser.displayName + "でログイン中"
          : "not login"
        }
      </pre>
    </div>
  </Box>
)

export default IndexPage
