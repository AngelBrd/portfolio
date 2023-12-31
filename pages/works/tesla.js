import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Tesla Clone">
      <Container>
        <Title>
          Tesla Clone <Badge>2023</Badge>
        </Title>
        <P>
        Tesla website homepage clone made with Astro and Tailwind. Not responsive design.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Angel069/teslaClone">
            https://github.com/Angel069/teslaClone <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, JavaScript, React, Astro, Tailwind</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/teslaImg2.png" alt="Travel" />
        <WorkImage src="/images/works/teslaImg.png" alt="Travel" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'