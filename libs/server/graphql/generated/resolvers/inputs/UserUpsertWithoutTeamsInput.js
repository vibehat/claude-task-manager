"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTeamsInput_1 = require("../inputs/UserCreateWithoutTeamsInput");
const UserUpdateWithoutTeamsInput_1 = require("../inputs/UserUpdateWithoutTeamsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutTeamsInput = class UserUpsertWithoutTeamsInput {
};
exports.UserUpsertWithoutTeamsInput = UserUpsertWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTeamsInput_1.UserUpdateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTeamsInput_1.UserUpdateWithoutTeamsInput)
], UserUpsertWithoutTeamsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput)
], UserUpsertWithoutTeamsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutTeamsInput.prototype, "where", void 0);
exports.UserUpsertWithoutTeamsInput = UserUpsertWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutTeamsInput", {})
], UserUpsertWithoutTeamsInput);
