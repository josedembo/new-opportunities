import { config } from "dotenv";

config();

export default {
    jwt: {
        secret: `${process.env.JWT_SERCRET}`,
        expiresIn: "2d"
    }
}