import { buildSchema } from "graphql";

const orderSchema = buildSchema(`
  type Order {
    id: ID
    customers: [Customer]
    products: [Product]
    bill: Int
    orderGrade: Grade
  }

  type Customer {
    name: String
    email: String
  }

  type Product {
    name: String
    price: Int
    isAvailable: Boolean
  }

  enum Grade {
    NORMAL
    SPECIAL
    VIP
  }

  type Query {
    getOrder(id: ID): Order
  }

  input OrderInput {
    id: ID
    customers: [CustomerInput]
    products: [ProductInput]
    bill: Int
    orderGrade: Grade
  }

  input CustomerInput {
    name: String
    email: String
  }

  input ProductInput {
    name: String
    price: Int
    isAvailable: Boolean
  }

  type Mutation {
    createOrder(input: OrderInput): Order
  }
`);


export default orderSchema;
