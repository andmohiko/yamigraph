import Tag from "components/Tag"
import { Box, Flex, Spacer } from '@chakra-ui/react'

interface Props {
  tags: string[]
}

const TagsSelecter = ({ tags }: Props) => {
  return (
    <div>
      <Flex>
        {tags.map(t => (
          <Box mr={2}>
            <Tag label={t}/>
          </Box>
        ))}
      </Flex>
    </div>
  )
}
export default TagsSelecter