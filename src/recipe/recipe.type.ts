import { ObjectType, Field, Int } from "type-graphql";

import { Resource } from "../resource/resource";

@ObjectType()
export class Recipe implements Resource {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field(_type => [Int])
  ratings: number[];
}
