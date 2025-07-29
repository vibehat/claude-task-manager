"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTeamsInput_1 = require("../inputs/UserCreateOrConnectWithoutTeamsInput");
const UserCreateWithoutTeamsInput_1 = require("../inputs/UserCreateWithoutTeamsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutTeamsInput = class UserCreateNestedOneWithoutTeamsInput {
};
exports.UserCreateNestedOneWithoutTeamsInput = UserCreateNestedOneWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTeamsInput_1.UserCreateWithoutTeamsInput)
], UserCreateNestedOneWithoutTeamsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTeamsInput_1.UserCreateOrConnectWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTeamsInput_1.UserCreateOrConnectWithoutTeamsInput)
], UserCreateNestedOneWithoutTeamsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutTeamsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutTeamsInput = UserCreateNestedOneWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutTeamsInput", {})
], UserCreateNestedOneWithoutTeamsInput);
