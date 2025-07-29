"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CycleScalarFieldEnum;
(function (CycleScalarFieldEnum) {
    CycleScalarFieldEnum["id"] = "id";
    CycleScalarFieldEnum["number"] = "number";
    CycleScalarFieldEnum["name"] = "name";
    CycleScalarFieldEnum["teamId"] = "teamId";
    CycleScalarFieldEnum["startDate"] = "startDate";
    CycleScalarFieldEnum["endDate"] = "endDate";
    CycleScalarFieldEnum["progress"] = "progress";
    CycleScalarFieldEnum["createdAt"] = "createdAt";
    CycleScalarFieldEnum["updatedAt"] = "updatedAt";
})(CycleScalarFieldEnum || (exports.CycleScalarFieldEnum = CycleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CycleScalarFieldEnum, {
    name: "CycleScalarFieldEnum",
    description: undefined,
});
