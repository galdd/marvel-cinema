import { sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

// interface UserAttributes {
//   id: string;
//   email: string;
// }

/**
 * generates JWT used for local testing
 */
export function JWTgenerateToken(id: string, email: string, isAdmin: boolean) {
  // information to be encoded in the JWT
  const payload = {
    id,
    email,
    isAdmin,
  };

  const signInOptions: SignOptions = {
    // RS256 uses a public/private key pair. The API provides the private key
    // to generate the JWT. The client gets a public key to validate the
    // signature
    algorithm: "HS512",
    expiresIn: "1d",
  };

  // generate JWT
  return sign(payload, "Secret", signInOptions);
}

//TODO example for scope/accessTypes
//TODO example for certificate

// import { sign, SignOptions } from "jsonwebtoken";
// import * as fs from "fs";
// import * as path from "path";

// /**
//  * generates JWT used for local testing
//  */
// export function generateToken() {
//   // information to be encoded in the JWT
//   const payload = {
//     name: "Andrés Reales",
//     userId: 123,
//     accessTypes: ["getTeams", "addTeams", "updateTeams", "deleteTeams"],
//   };
//    read private key value
//     const privateKey = fs.readFileSync(
//       path.join(__dirname, "./../../../private.key")
//      );

//   const signInOptions: SignOptions = {
//     // RS256 uses a public/private key pair. The API provides the private key
//     // to generate the JWT. The client gets a public key to validate the
//     // signature
//     algorithm: "RS256",
//     expiresIn: "1h",
//   };

//   // generate JWT
//   return sign(payload, "", signInOptions);
// }
