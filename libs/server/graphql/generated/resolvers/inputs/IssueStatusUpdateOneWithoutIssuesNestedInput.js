"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusUpdateOneWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateOrConnectWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateOrConnectWithoutIssuesInput");
const IssueStatusCreateWithoutIssuesInput_1 = require("../inputs/IssueStatusCreateWithoutIssuesInput");
const IssueStatusUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/IssueStatusUpdateToOneWithWhereWithoutIssuesInput");
const IssueStatusUpsertWithoutIssuesInput_1 = require("../inputs/IssueStatusUpsertWithoutIssuesInput");
const IssueStatusWhereInput_1 = require("../inputs/IssueStatusWhereInput");
const IssueStatusWhereUniqueInput_1 = require("../inputs/IssueStatusWhereUniqueInput");
let IssueStatusUpdateOneWithoutIssuesNestedInput = class IssueStatusUpdateOneWithoutIssuesNestedInput {
};
exports.IssueStatusUpdateOneWithoutIssuesNestedInput = IssueStatusUpdateOneWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateWithoutIssuesInput_1.IssueStatusCreateWithoutIssuesInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateOrConnectWithoutIssuesInput_1.IssueStatusCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateOrConnectWithoutIssuesInput_1.IssueStatusCreateOrConnectWithoutIssuesInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpsertWithoutIssuesInput_1.IssueStatusUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusUpsertWithoutIssuesInput_1.IssueStatusUpsertWithoutIssuesInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateToOneWithWhereWithoutIssuesInput_1.IssueStatusUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateToOneWithWhereWithoutIssuesInput_1.IssueStatusUpdateToOneWithWhereWithoutIssuesInput)
], IssueStatusUpdateOneWithoutIssuesNestedInput.prototype, "update", void 0);
exports.IssueStatusUpdateOneWithoutIssuesNestedInput = IssueStatusUpdateOneWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusUpdateOneWithoutIssuesNestedInput", {})
], IssueStatusUpdateOneWithoutIssuesNestedInput);
