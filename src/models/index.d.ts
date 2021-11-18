import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddMenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

export declare class AddMenu {
  readonly id: string;
  readonly dishname: string;
  readonly ingredients?: string;
  readonly image?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AddMenu, AddMenuMetaData>);
  static copyOf(source: AddMenu, mutator: (draft: MutableModel<AddMenu, AddMenuMetaData>) => MutableModel<AddMenu, AddMenuMetaData> | void): AddMenu;
}