/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoomMeta = /* GraphQL */ `
  query GetRoomMeta($id: ID!) {
    getRoomMeta(id: $id) {
      id
      name
      value
      Room {
        id
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      roomMetaRoomId
      __typename
    }
  }
`;
export const listRoomMetas = /* GraphQL */ `
  query ListRoomMetas(
    $filter: ModelRoomMetaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomMetas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        createdAt
        updatedAt
        roomMetaRoomId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestionEvent = /* GraphQL */ `
  query GetQuestionEvent($id: ID!) {
    getQuestionEvent(id: $id) {
      id
      Question {
        id
        text
        enabled
        points
        category
        createdAt
        updatedAt
        __typename
      }
      type
      datetime
      createdAt
      updatedAt
      questionEventQuestionId
      __typename
    }
  }
`;
export const listQuestionEvents = /* GraphQL */ `
  query ListQuestionEvents(
    $filter: ModelQuestionEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        datetime
        createdAt
        updatedAt
        questionEventQuestionId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      enabled
      points
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        enabled
        points
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      admin
      creation_datetime
      Room {
        id
        name
        value
        createdAt
        updatedAt
        roomMetaRoomId
        __typename
      }
      points
      createdAt
      updatedAt
      userRoomId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        admin
        creation_datetime
        points
        createdAt
        updatedAt
        userRoomId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
