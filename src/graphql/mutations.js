/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoomMeta = /* GraphQL */ `
  mutation CreateRoomMeta(
    $input: CreateRoomMetaInput!
    $condition: ModelRoomMetaConditionInput
  ) {
    createRoomMeta(input: $input, condition: $condition) {
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
export const updateRoomMeta = /* GraphQL */ `
  mutation UpdateRoomMeta(
    $input: UpdateRoomMetaInput!
    $condition: ModelRoomMetaConditionInput
  ) {
    updateRoomMeta(input: $input, condition: $condition) {
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
export const deleteRoomMeta = /* GraphQL */ `
  mutation DeleteRoomMeta(
    $input: DeleteRoomMetaInput!
    $condition: ModelRoomMetaConditionInput
  ) {
    deleteRoomMeta(input: $input, condition: $condition) {
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
export const createQuestionEvent = /* GraphQL */ `
  mutation CreateQuestionEvent(
    $input: CreateQuestionEventInput!
    $condition: ModelQuestionEventConditionInput
  ) {
    createQuestionEvent(input: $input, condition: $condition) {
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
export const updateQuestionEvent = /* GraphQL */ `
  mutation UpdateQuestionEvent(
    $input: UpdateQuestionEventInput!
    $condition: ModelQuestionEventConditionInput
  ) {
    updateQuestionEvent(input: $input, condition: $condition) {
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
export const deleteQuestionEvent = /* GraphQL */ `
  mutation DeleteQuestionEvent(
    $input: DeleteQuestionEventInput!
    $condition: ModelQuestionEventConditionInput
  ) {
    deleteQuestionEvent(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
