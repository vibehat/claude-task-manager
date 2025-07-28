"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTeamsInput_1 = require("../inputs/UserCreateWithoutTeamsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutTeamsInput = class UserCreateOrConnectWithoutTeamsInput {
};
exports.UserCreateOrConnectWithoutTeamsInput = UserCreateOrConnectWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutTeamsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput)
], UserCreateOrConnectWithoutTeamsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutTeamsInput = UserCreateOrConnectWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutTeamsInput", {})
], UserCreateOrConnectWithoutTeamsInput);
