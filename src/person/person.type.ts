import { ObjectType, Field, Int } from "type-graphql";

import { Resource } from "../resource/resource";
import { PersonRole } from "./person.role";

@ObjectType()
export class Person implements Resource {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(_type => Int)
  age: number;

  @Field(_type => PersonRole)
  role: PersonRole;
}
