import userType from "./user.schema";
import ticketType from "./ticket.schema";
import orderType from "./order.schema";

import { mergeTypeDefs } from "@graphql-tools/merge";
// const types = [userType, ticketType, orderType];
const types = [userType, orderType, ticketType];

// export default types;

export default mergeTypeDefs(types);
