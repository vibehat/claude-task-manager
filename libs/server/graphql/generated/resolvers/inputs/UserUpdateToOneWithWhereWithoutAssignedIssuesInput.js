"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutAssignedIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutAssignedIssuesInput_1 = require("../inputs/UserUpdateWithoutAssignedIssuesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutAssignedIssuesInput = class UserUpdateToOneWithWhereWithoutAssignedIssuesInput {
};
exports.UserUpdateToOneWithWhereWithoutAssignedIssuesInput = UserUpdateToOneWithWhereWithoutAssignedIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutAssignedIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAssignedIssuesInput_1.UserUpdateWithoutAssignedIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAssignedIssuesInput_1.UserUpdateWithoutAssignedIssuesInput)
], UserUpdateToOneWithWhereWithoutAssignedIssuesInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutAssignedIssuesInput = UserUpdateToOneWithWhereWithoutAssignedIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAssignedIssuesInput", {})
], UserUpdateToOneWithWhereWithoutAssignedIssuesInput);
