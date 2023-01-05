import { Container, Flex, FlexProps, Text } from '@chakra-ui/react'
import { ShowCase } from '../Card'

export const Main = (props: FlexProps) => {
  return (
    <Container as="main" role="main" direction="column" flex="1" py="16" {...props}>
      {/* <Container flex="1">
        Main
      </Container> */}
      <Text fontSize='3xl'>Features</Text>
      <ShowCase />
    </Container>
  )
}