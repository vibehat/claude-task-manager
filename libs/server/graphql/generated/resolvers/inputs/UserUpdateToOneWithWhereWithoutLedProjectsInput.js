"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutLedProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutLedProjectsInput_1 = require("../inputs/UserUpdateWithoutLedProjectsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutLedProjectsInput = class UserUpdateToOneWithWhereWithoutLedProjectsInput {
};
exports.UserUpdateToOneWithWhereWithoutLedProjectsInput = UserUpdateToOneWithWhereWithoutLedProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutLedProjectsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLedProjectsInput_1.UserUpdateWithoutLedProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLedProjectsInput_1.UserUpdateWithoutLedProjectsInput)
], UserUpdateToOneWithWhereWithoutLedProjectsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutLedProjectsInput = UserUpdateToOneWithWhereWithoutLedProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutLedProjectsInput", {})
], UserUpdateToOneWithWhereWithoutLedProjectsInput);
