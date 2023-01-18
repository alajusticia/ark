import { Button } from '@/components/shared/Button'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'
import { Box, Container, Stack } from '@/panda/jsx'
import Link from 'next/link'

export const Hero = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack direction={{ base: 'column', md: 'row' }} gap="20" align="center">
      <Stack gap={{ base: '8', md: '12' }} flex="1">
        <Stack gap="6">
          <Heading textStyle={{ base: '4xl', md: '6xl' }} fontWeight="semibold">
            A UI framework made for enterprises
          </Heading>
          <Text textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
            Access fully customizable, accessible, and unstyled UI components that give you complete
            control over the styling of your webp app in React, Vue and Solid.js
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', sm: 'row' }} gap="3" width="full" alignItems="stretch">
          <Link href="/docs/react/components/accordion">
            <Button size={{ base: 'xl', md: '2xl' }} width="full">
              Explore now
            </Button>
          </Link>
          <Button size={{ base: 'xl', md: '2xl' }} variant="secondary">
            Learn more
          </Button>
        </Stack>
      </Stack>
      <Box bg="bg.subtle" flex="1" minH="600px" p="4" width="full">
        Placeholder Image
      </Box>
    </Stack>
  </Container>
)