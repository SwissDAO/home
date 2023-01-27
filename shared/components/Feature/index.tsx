import { Card, Text, Image, Row, Button } from '@nextui-org/react';
import { Feature as FeatureType } from '../../models';

type Props = {
  feature: FeatureType;
};

const Feature = ({ feature }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={feature?.image || 'https://bit.ly/dan-abramov'}
          alt={''}
          objectFit="fill"
        />
      </Card>
      {/* <Card height="max-content">
        <CardHeader>
          <Heading size="md">{feature?.heading}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{feature?.body}</Text>
        </CardBody>
        {feature?.cta && (
          <CardFooter>
            <Button onClick={feature?.cta?.onClick}>
              {feature?.cta?.label}
            </Button>
          </CardFooter>
        )}
      </Card> */}

      <Card css={{ mw: 'max-content' }}>
        <Card.Header>
          <Text b>{feature?.heading}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              Cancel
            </Button>
            <Button size="sm">Agree</Button>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Feature;
