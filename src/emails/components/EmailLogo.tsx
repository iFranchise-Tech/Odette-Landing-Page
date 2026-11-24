import { Img, Section, Text } from "@react-email/components";
import { EMAIL_BRAND } from "../brand";
import { ODETTE_EMAIL_LOGO_URL } from "../odetteLogo";

export function EmailLogo() {
  return (
    <Section style={logoSectionStyle}>
      <Img
        src={ODETTE_EMAIL_LOGO_URL}
        alt="Odette"
        width="220"
        height="auto"
        style={logoImageStyle}
      />
      <Text style={taglineStyle}>{EMAIL_BRAND.tagline}</Text>
    </Section>
  );
}

const logoSectionStyle = {
  textAlign: "center" as const,
  marginBottom: "28px",
};

const logoImageStyle = {
  margin: "0 auto",
  display: "block",
  maxWidth: "220px",
  width: "220px",
  height: "auto",
};

const taglineStyle = {
  margin: "10px 0 0",
  color: EMAIL_BRAND.textMuted,
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
};
