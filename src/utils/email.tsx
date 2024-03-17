import {
  Body,
  Container,
  Head,
  Hr,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Html, } from "@react-email/html";
import { render } from "@react-email/render";

export default function Email(props:any) {
  const { name , message , email} = props;
  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
  console.log(`${baseUrl}/images/hero-img.png`)
  return (
    <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
                src={`${baseUrl}/images/hero-img.png`}
                width="170"
          height="50"
          style={logo}
          alt=""
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          {message}.
        </Text>
        <Section style={btnContainer}>
          this is my email: <b> {email}</b>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          For me
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
  );
}


export const EmailHtml = (name:string,email:string, message: string)=> render(<Email name={name}  email={email} message={message}/>);



 

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
