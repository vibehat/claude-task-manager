"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutTeamsInput_1 = require("../inputs/UserUpdateWithoutTeamsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutTeamsInput = class UserUpdateToOneWithWhereWithoutTeamsInput {
};
exports.UserUpdateToOneWithWhereWithoutTeamsInput = UserUpdateToOneWithWhereWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutTeamsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTeamsInput_1.UserUpdateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTeamsInput_1.UserUpdateWithoutTeamsInput)
], UserUpdateToOneWithWhereWithoutTeamsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutTeamsInput = UserUpdateToOneWithWhereWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutTeamsInput", {})
], UserUpdateToOneWithWhereWithoutTeamsInput);
