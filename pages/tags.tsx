import React from 'react'
import TagsSelecter from "components/TagsSelecter"
import TagEditer from "components/TagEditer"
import Button from 'components/Button'
import { Box, Flex, Spacer } from '@chakra-ui/react'

const TagsPage = () => {
  const tagsArr = ['tag1', 'tag2', 'tag3', 'tagggg5']
  const click = () => {
    console.log('clickedddddddd')
  }

  return (
    <div>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        aaaaaaaaauuuuuuu
        <TagEditer />
        {/* <Box w='240px'>
        </Box> */}
        <TagsSelecter tags={tagsArr} />
        {/* <Button callback={click} label='ぼったん' /> */}
      </Box>
    </div>
  )
}
export default TagsPage