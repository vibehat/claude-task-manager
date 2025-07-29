"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateInput_1 = require("../../../inputs/UserCreateInput");
const UserUpdateInput_1 = require("../../../inputs/UserUpdateInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
exports.UpsertOneUserArgs = UpsertOneUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateInput_1.UserCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateInput_1.UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateInput_1.UserUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateInput_1.UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
exports.UpsertOneUserArgs = UpsertOneUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUserArgs);
