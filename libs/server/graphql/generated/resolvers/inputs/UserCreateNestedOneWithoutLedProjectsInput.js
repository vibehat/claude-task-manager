"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutLedProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLedProjectsInput_1 = require("../inputs/UserCreateOrConnectWithoutLedProjectsInput");
const UserCreateWithoutLedProjectsInput_1 = require("../inputs/UserCreateWithoutLedProjectsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutLedProjectsInput = class UserCreateNestedOneWithoutLedProjectsInput {
};
exports.UserCreateNestedOneWithoutLedProjectsInput = UserCreateNestedOneWithoutLedProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLedProjectsInput_1.UserCreateWithoutLedProjectsInput)
], UserCreateNestedOneWithoutLedProjectsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLedProjectsInput_1.UserCreateOrConnectWithoutLedProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutLedProjectsInput_1.UserCreateOrConnectWithoutLedProjectsInput)
], UserCreateNestedOneWithoutLedProjectsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutLedProjectsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutLedProjectsInput = UserCreateNestedOneWithoutLedProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutLedProjectsInput", {})
], UserCreateNestedOneWithoutLedProjectsInput);
