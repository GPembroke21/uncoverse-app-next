import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlatformMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InteractionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AnalyticsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Platform {
  readonly id: string;
  readonly name: string;
  readonly imageId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Platform, PlatformMetaData>);
  static copyOf(source: Platform, mutator: (draft: MutableModel<Platform, PlatformMetaData>) => MutableModel<Platform, PlatformMetaData> | void): Platform;
}

export declare class Event {
  readonly id: string;
  readonly platformId: string;
  readonly apiId?: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly imageOverlay?: string;
  readonly category: string;
  readonly totalAttendees?: number;
  readonly dateTimeStart: string;
  readonly dateTimeEnd: string;
  readonly repeat: string;
  readonly createdByUser?: string;
  readonly locator?: string;
  readonly url?: string;
  readonly parentEvent?: string;
  readonly childEvents?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Interaction {
  readonly id: string;
  readonly registeredUserId?: string;
  readonly eventId: string;
  readonly favorite?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Interaction, InteractionMetaData>);
  static copyOf(source: Interaction, mutator: (draft: MutableModel<Interaction, InteractionMetaData>) => MutableModel<Interaction, InteractionMetaData> | void): Interaction;
}

export declare class Analytics {
  readonly id: string;
  readonly name: string;
  readonly data?: string;
  readonly color?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Analytics, AnalyticsMetaData>);
  static copyOf(source: Analytics, mutator: (draft: MutableModel<Analytics, AnalyticsMetaData>) => MutableModel<Analytics, AnalyticsMetaData> | void): Analytics;
}