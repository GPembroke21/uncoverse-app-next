/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createInteraction = /* GraphQL */ `
  mutation CreateInteraction(
    $input: CreateInteractionInput!
    $condition: ModelInteractionConditionInput
  ) {
    createInteraction(input: $input, condition: $condition) {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const updateInteraction = /* GraphQL */ `
  mutation UpdateInteraction(
    $input: UpdateInteractionInput!
    $condition: ModelInteractionConditionInput
  ) {
    updateInteraction(input: $input, condition: $condition) {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const deleteInteraction = /* GraphQL */ `
  mutation DeleteInteraction(
    $input: DeleteInteractionInput!
    $condition: ModelInteractionConditionInput
  ) {
    deleteInteraction(input: $input, condition: $condition) {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const createAnalytics = /* GraphQL */ `
  mutation CreateAnalytics(
    $input: CreateAnalyticsInput!
    $condition: ModelAnalyticsConditionInput
  ) {
    createAnalytics(input: $input, condition: $condition) {
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
export const updateAnalytics = /* GraphQL */ `
  mutation UpdateAnalytics(
    $input: UpdateAnalyticsInput!
    $condition: ModelAnalyticsConditionInput
  ) {
    updateAnalytics(input: $input, condition: $condition) {
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
export const deleteAnalytics = /* GraphQL */ `
  mutation DeleteAnalytics(
    $input: DeleteAnalyticsInput!
    $condition: ModelAnalyticsConditionInput
  ) {
    deleteAnalytics(input: $input, condition: $condition) {
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
