"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateOneWithoutSubIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateOrConnectWithoutSubIssuesInput_1 = require("../inputs/IssueCreateOrConnectWithoutSubIssuesInput");
const IssueCreateWithoutSubIssuesInput_1 = require("../inputs/IssueCreateWithoutSubIssuesInput");
const IssueUpdateToOneWithWhereWithoutSubIssuesInput_1 = require("../inputs/IssueUpdateToOneWithWhereWithoutSubIssuesInput");
const IssueUpsertWithoutSubIssuesInput_1 = require("../inputs/IssueUpsertWithoutSubIssuesInput");
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateOneWithoutSubIssuesNestedInput = class IssueUpdateOneWithoutSubIssuesNestedInput {
};
exports.IssueUpdateOneWithoutSubIssuesNestedInput = IssueUpdateOneWithoutSubIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutSubIssuesInput_1.IssueCreateWithoutSubIssuesInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateOrConnectWithoutSubIssuesInput_1.IssueCreateOrConnectWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateOrConnectWithoutSubIssuesInput_1.IssueCreateOrConnectWithoutSubIssuesInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpsertWithoutSubIssuesInput_1.IssueUpsertWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpsertWithoutSubIssuesInput_1.IssueUpsertWithoutSubIssuesInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateToOneWithWhereWithoutSubIssuesInput_1.IssueUpdateToOneWithWhereWithoutSubIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateToOneWithWhereWithoutSubIssuesInput_1.IssueUpdateToOneWithWhereWithoutSubIssuesInput)
], IssueUpdateOneWithoutSubIssuesNestedInput.prototype, "update", void 0);
exports.IssueUpdateOneWithoutSubIssuesNestedInput = IssueUpdateOneWithoutSubIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateOneWithoutSubIssuesNestedInput", {})
], IssueUpdateOneWithoutSubIssuesNestedInput);
