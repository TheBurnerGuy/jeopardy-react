/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
      id
      Room {
        id
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      number
      a1
      a2
      a3
      a4
      a5
      b1
      b2
      b3
      b4
      b5
      c1
      c2
      c3
      c4
      c5
      d1
      d2
      d3
      d4
      d5
      e1
      e2
      e3
      e4
      e5
      columnA
      columnB
      columnC
      columnD
      columnE
      createdAt
      updatedAt
      boardRoomId
      __typename
    }
  }
`;
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
      id
      Room {
        id
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      number
      a1
      a2
      a3
      a4
      a5
      b1
      b2
      b3
      b4
      b5
      c1
      c2
      c3
      c4
      c5
      d1
      d2
      d3
      d4
      d5
      e1
      e2
      e3
      e4
      e5
      columnA
      columnB
      columnC
      columnD
      columnE
      createdAt
      updatedAt
      boardRoomId
      __typename
    }
  }
`;
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
      id
      Room {
        id
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      number
      a1
      a2
      a3
      a4
      a5
      b1
      b2
      b3
      b4
      b5
      c1
      c2
      c3
      c4
      c5
      d1
      d2
      d3
      d4
      d5
      e1
      e2
      e3
      e4
      e5
      columnA
      columnB
      columnC
      columnD
      columnE
      createdAt
      updatedAt
      boardRoomId
      __typename
    }
  }
`;
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
      creation_datetime
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
      creation_datetime
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
      creation_datetime
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
        board_relation
        createdAt
        updatedAt
        questionBoardId
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
        board_relation
        createdAt
        updatedAt
        questionBoardId
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
        board_relation
        createdAt
        updatedAt
        questionBoardId
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
      board_relation
      Board {
        id
        number
        a1
        a2
        a3
        a4
        a5
        b1
        b2
        b3
        b4
        b5
        c1
        c2
        c3
        c4
        c5
        d1
        d2
        d3
        d4
        d5
        e1
        e2
        e3
        e4
        e5
        columnA
        columnB
        columnC
        columnD
        columnE
        createdAt
        updatedAt
        boardRoomId
        __typename
      }
      createdAt
      updatedAt
      questionBoardId
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
      board_relation
      Board {
        id
        number
        a1
        a2
        a3
        a4
        a5
        b1
        b2
        b3
        b4
        b5
        c1
        c2
        c3
        c4
        c5
        d1
        d2
        d3
        d4
        d5
        e1
        e2
        e3
        e4
        e5
        columnA
        columnB
        columnC
        columnD
        columnE
        createdAt
        updatedAt
        boardRoomId
        __typename
      }
      createdAt
      updatedAt
      questionBoardId
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
      board_relation
      Board {
        id
        number
        a1
        a2
        a3
        a4
        a5
        b1
        b2
        b3
        b4
        b5
        c1
        c2
        c3
        c4
        c5
        d1
        d2
        d3
        d4
        d5
        e1
        e2
        e3
        e4
        e5
        columnA
        columnB
        columnC
        columnD
        columnE
        createdAt
        updatedAt
        boardRoomId
        __typename
      }
      createdAt
      updatedAt
      questionBoardId
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
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      points
      mesos
      security_name
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
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      points
      mesos
      security_name
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
        code
        creation_datetime
        createdAt
        updatedAt
        __typename
      }
      points
      mesos
      security_name
      createdAt
      updatedAt
      userRoomId
      __typename
    }
  }
`;
