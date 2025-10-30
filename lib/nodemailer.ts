import nodemailer from "nodemailer";

const { EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS } =
  process.env;

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
  throw new Error("Email environment variables are not fully configured.");
}

export const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number.parseInt(EMAIL_PORT, 10),
  secure: EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});
