import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BathroomsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Bathrooms {
  readonly id: string;
  readonly name?: string | null;
  readonly rating?: number | null;
  readonly address?: string | null;
  readonly description?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bathrooms, BathroomsMetaData>);
  static copyOf(source: Bathrooms, mutator: (draft: MutableModel<Bathrooms, BathroomsMetaData>) => MutableModel<Bathrooms, BathroomsMetaData> | void): Bathrooms;
}