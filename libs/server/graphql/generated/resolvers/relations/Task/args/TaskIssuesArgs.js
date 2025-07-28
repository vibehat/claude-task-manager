"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskIssuesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByWithRelationInput_1 = require("../../../inputs/IssueOrderByWithRelationInput");
const IssueWhereInput_1 = require("../../../inputs/IssueWhereInput");
const IssueWhereUniqueInput_1 = require("../../../inputs/IssueWhereUniqueInput");
const IssueScalarFieldEnum_1 = require("../../../../enums/IssueScalarFieldEnum");
let TaskIssuesArgs = class TaskIssuesArgs {
};
exports.TaskIssuesArgs = TaskIssuesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], TaskIssuesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueOrderByWithRelationInput_1.IssueOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskIssuesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], TaskIssuesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskIssuesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskIssuesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarFieldEnum_1.IssueScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskIssuesArgs.prototype, "distinct", void 0);
exports.TaskIssuesArgs = TaskIssuesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TaskIssuesArgs);
