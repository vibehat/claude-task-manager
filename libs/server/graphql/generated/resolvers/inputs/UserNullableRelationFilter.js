"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserNullableRelationFilter = class UserNullableRelationFilter {
};
exports.UserNullableRelationFilter = UserNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserNullableRelationFilter.prototype, "isNot", void 0);
exports.UserNullableRelationFilter = UserNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UserNullableRelationFilter", {})
], UserNullableRelationFilter);
