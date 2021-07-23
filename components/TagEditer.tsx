import React, { useState } from 'react'
import { auth, Firebase } from 'lib/firebase'
import Button from 'components/Button'
import { Box, Input } from "@chakra-ui/react"

const db = Firebase.firestore()

const TagEditer = () => {
  const [newTag, setNewTag] = useState('')
  const handleChange = (e: any) => setNewTag(e.target.value)
  const addTag = () => {
    db.collection('tags')
      .add({
        label: newTag,
        userId: auth.currentUser?.uid
      })
  }

  return (
    <div>
      <Box w='240px' m={2}>
        <Input
          value={newTag}
          onChange={handleChange}
          placeholder='リスカ'
        />
      </Box>
      <Box m={2}>
        <Button
          callback={addTag}
          label='追加する'
        />
      </Box>
    </div>
  )
}
export default TagEditer