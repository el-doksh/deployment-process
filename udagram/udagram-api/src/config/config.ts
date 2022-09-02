import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.DB_USER}`,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.PORT),
  host: process.env.DB_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
