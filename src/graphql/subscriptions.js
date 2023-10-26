/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoomMeta = /* GraphQL */ `
  subscription OnCreateRoomMeta($filter: ModelSubscriptionRoomMetaFilterInput) {
    onCreateRoomMeta(filter: $filter) {
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
export const onUpdateRoomMeta = /* GraphQL */ `
  subscription OnUpdateRoomMeta($filter: ModelSubscriptionRoomMetaFilterInput) {
    onUpdateRoomMeta(filter: $filter) {
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
export const onDeleteRoomMeta = /* GraphQL */ `
  subscription OnDeleteRoomMeta($filter: ModelSubscriptionRoomMetaFilterInput) {
    onDeleteRoomMeta(filter: $filter) {
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
export const onCreateQuestionEvent = /* GraphQL */ `
  subscription OnCreateQuestionEvent(
    $filter: ModelSubscriptionQuestionEventFilterInput
  ) {
    onCreateQuestionEvent(filter: $filter) {
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
export const onUpdateQuestionEvent = /* GraphQL */ `
  subscription OnUpdateQuestionEvent(
    $filter: ModelSubscriptionQuestionEventFilterInput
  ) {
    onUpdateQuestionEvent(filter: $filter) {
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
export const onDeleteQuestionEvent = /* GraphQL */ `
  subscription OnDeleteQuestionEvent(
    $filter: ModelSubscriptionQuestionEventFilterInput
  ) {
    onDeleteQuestionEvent(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
      id
      code
      creation_datetime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
