"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["avatarUrl"] = "avatarUrl";
    UserScalarFieldEnum["status"] = "status";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["joinedDate"] = "joinedDate";
    UserScalarFieldEnum["teamIds"] = "teamIds";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
})(UserScalarFieldEnum || (exports.UserScalarFieldEnum = UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
