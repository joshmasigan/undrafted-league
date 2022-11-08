import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import main from "./main";
import social from "./social";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([main, social]),
});
