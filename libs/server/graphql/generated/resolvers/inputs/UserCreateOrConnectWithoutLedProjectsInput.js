"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLedProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLedProjectsInput_1 = require("../inputs/UserCreateWithoutLedProjectsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutLedProjectsInput = class UserCreateOrConnectWithoutLedProjectsInput {
};
exports.UserCreateOrConnectWithoutLedProjectsInput = UserCreateOrConnectWithoutLedProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutLedProjectsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput)
], UserCreateOrConnectWithoutLedProjectsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutLedProjectsInput = UserCreateOrConnectWithoutLedProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutLedProjectsInput", {})
], UserCreateOrConnectWithoutLedProjectsInput);
