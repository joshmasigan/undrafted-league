import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import main from "./main";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([main]),
});
