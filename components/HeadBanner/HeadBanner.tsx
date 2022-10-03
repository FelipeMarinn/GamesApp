import { Button, Container, Header, Icon } from 'semantic-ui-react'

const HeadBanner = () => {
  const bannerImage =
    'https://assets.xboxservices.com/assets/3d/1a/3d1af36a-b0b2-41c8-95b7-e4e71c146674.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x609_03.jpg'

  return (
    <div className="container">
      <Container textAlign="center">
        <Header
          as="h1"
          content="Imagine-a-Company"
          inverted
          style={{
            textShadow: '-2px 1px 6px black',
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            paddingTop: '1.5em',
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            textShadow: '-2px 1px 4px black',
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1em',
          }}
        />
        <Button size="huge" color="violet">
          Get Started
          <Icon name="arrow alternate circle right" />
        </Button>
      </Container>

      <style jsx>
        {`
          .container {
            margin: 2rem 0 3rem;
            background: url(${bannerImage}) no-repeat center;
            height: 400px;
            background-size: cover;
          }
          .container :global(.header) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default HeadBanner
