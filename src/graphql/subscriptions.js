/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
      id
      name
      imageId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateInteraction = /* GraphQL */ `
  subscription OnCreateInteraction {
    onCreateInteraction {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInteraction = /* GraphQL */ `
  subscription OnUpdateInteraction {
    onUpdateInteraction {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInteraction = /* GraphQL */ `
  subscription OnDeleteInteraction {
    onDeleteInteraction {
      id
      registeredUserId
      eventId
      favorite
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnalytics = /* GraphQL */ `
  subscription OnCreateAnalytics {
    onCreateAnalytics {
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
export const onUpdateAnalytics = /* GraphQL */ `
  subscription OnUpdateAnalytics {
    onUpdateAnalytics {
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
export const onDeleteAnalytics = /* GraphQL */ `
  subscription OnDeleteAnalytics {
    onDeleteAnalytics {
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
