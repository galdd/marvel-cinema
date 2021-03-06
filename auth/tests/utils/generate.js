import faker from "@faker-js/faker";
import bcrypt from "bcrypt";
import { JWTgenerateToken } from "../../src/utils/jwt.utils";
// import {getUserToken, getSaltAndHash} from '../../src/utils/auth'

// passwords must have at least these kinds of characters to be valid, so we'll
// prefex all of the ones we generate with `!0_Oo` to ensure it's valid.

function getSaltAndHash(password) {
  const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

  return { salt: 12, hash };
}

function getUserToken({ id, email }) {
  const issuedAt = Math.floor(now() / 1000);
  return JWTgenerateToken(id.toString(), email);
}

const getPassword = (...args) =>
  `Fa0${faker.internet.password(16, false, /[0-9A-Za-z]/)}`;
const getEmail = faker.internet.email;
const getId = faker.datatype.uuid;
const getSynopsis = faker.lorem.paragraph;
const getNotes = faker.lorem.paragraph;

function buildUser({ password = getPassword(), ...overrides } = {}) {
  return {
    id: getId(),
    email: getEmail(),
    ...getSaltAndHash(password),
    ...overrides,
  };
}

function buildBook(overrides) {
  return {
    id: getId(),
    title: faker.lorem.words(),
    author: faker.name.findName(),
    coverImageUrl: faker.image.imageUrl(),
    pageCount: faker.random.number(400),
    publisher: faker.company.companyName(),
    synopsis: faker.lorem.paragraph(),
    ...overrides,
  };
}

function buildListItem(overrides = {}) {
  const {
    bookId = overrides.book ? overrides.book.id : getId(),
    startDate = faker.date.past(2),
    finishDate = faker.date.between(startDate, new Date()),
    owner = { ownerId: getId() },
  } = overrides;
  return {
    id: getId(),
    bookId,
    ownerId: owner.id,
    rating: faker.random.number(5),
    notes: faker.random.boolean() ? "" : getNotes(),
    finishDate,
    startDate,
    ...overrides,
  };
}

function token(user) {
  return getUserToken(buildUser(user));
}

function signinForm(overrides) {
  return {
    email: getEmail(),
    password: getPassword(),
    ...overrides,
  };
}

function buildReq({ user = buildUser(), ...overrides } = {}) {
  const req = { user, body: {}, params: {}, ...overrides };
  return req;
}

function buildRes(overrides = {}) {
  const res = {
    json: jest.fn(() => res).mockName("json"),
    status: jest.fn(() => res).mockName("status"),
    ...overrides,
  };
  return res;
}

function buildNext(impl) {
  return jest.fn(impl).mockName("next");
}

export {
  buildReq,
  buildRes,
  buildNext,
  buildUser,
  buildListItem,
  buildBook,
  token,
  signinForm,
  getPassword as password,
  getEmail as email,
  getId as id,
  getSynopsis as synopsis,
  getNotes as notes,
};
