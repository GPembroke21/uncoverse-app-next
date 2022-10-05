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
  readonly category: string;
  readonly totalAttendees?: number;
  readonly dateTimeStart: string;
  readonly dateTimeEnd: string;
  readonly repeat: string;
  readonly createdByUser?: string;
  readonly locator?: string;
  readonly url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}