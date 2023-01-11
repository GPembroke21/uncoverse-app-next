/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      platformId
      apiId
      name
      description
      image
      category
      totalAttendees
      dateTimeStart
      dateTimeEnd
      repeat
      createdByUser
      locator
      url
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        platformId
        apiId
        name
        description
        image
        category
        totalAttendees
        dateTimeStart
        dateTimeEnd
        repeat
        createdByUser
        locator
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInteraction = /* GraphQL */ `
  query GetInteraction($id: ID!) {
    getInteraction(id: $id) {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const listInteractions = /* GraphQL */ `
  query ListInteractions(
    $filter: ModelInteractionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInteractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        registeredUserId
        eventId
        favorite
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnalytics = /* GraphQL */ `
  query GetAnalytics($id: ID!) {
    getAnalytics(id: $id) {
      id
      name
      data
      lastDate
      firstDate
      color
      createdAt
      updatedAt
    }
  }
`;
export const listAnalytics = /* GraphQL */ `
  query ListAnalytics(
    $filter: ModelAnalyticsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnalytics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        lastDate
        firstDate
        color
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
