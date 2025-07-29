"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserRelationFilter = class UserRelationFilter {
};
exports.UserRelationFilter = UserRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserRelationFilter.prototype, "isNot", void 0);
exports.UserRelationFilter = UserRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRelationFilter", {})
], UserRelationFilter);
