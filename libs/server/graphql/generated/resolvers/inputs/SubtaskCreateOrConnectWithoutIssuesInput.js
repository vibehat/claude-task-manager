"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateWithoutIssuesInput_1 = require("../inputs/SubtaskCreateWithoutIssuesInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskCreateOrConnectWithoutIssuesInput = class SubtaskCreateOrConnectWithoutIssuesInput {
};
exports.SubtaskCreateOrConnectWithoutIssuesInput = SubtaskCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], SubtaskCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput)
], SubtaskCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.SubtaskCreateOrConnectWithoutIssuesInput = SubtaskCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateOrConnectWithoutIssuesInput", {})
], SubtaskCreateOrConnectWithoutIssuesInput);
