import { Html } from '@react-email/html'
import { Text } from "@react-email/text";

const EmailTemplate = () => {
  return (
    <Html lang='en'>
      <Text>Brand new article from Axios!!!</Text>
    </Html>
  )
}

export default EmailTemplate