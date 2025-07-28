"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateOrConnectWithoutIssuesInput_1 = require("../inputs/SubtaskCreateOrConnectWithoutIssuesInput");
const SubtaskCreateWithoutIssuesInput_1 = require("../inputs/SubtaskCreateWithoutIssuesInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskCreateNestedOneWithoutIssuesInput = class SubtaskCreateNestedOneWithoutIssuesInput {
};
exports.SubtaskCreateNestedOneWithoutIssuesInput = SubtaskCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput)
], SubtaskCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateOrConnectWithoutIssuesInput_1.SubtaskCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateOrConnectWithoutIssuesInput_1.SubtaskCreateOrConnectWithoutIssuesInput)
], SubtaskCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], SubtaskCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.SubtaskCreateNestedOneWithoutIssuesInput = SubtaskCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateNestedOneWithoutIssuesInput", {})
], SubtaskCreateNestedOneWithoutIssuesInput);
