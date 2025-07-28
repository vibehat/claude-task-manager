"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueAvgAggregate_1 = require("../outputs/IssueAvgAggregate");
const IssueCountAggregate_1 = require("../outputs/IssueCountAggregate");
const IssueMaxAggregate_1 = require("../outputs/IssueMaxAggregate");
const IssueMinAggregate_1 = require("../outputs/IssueMinAggregate");
const IssueSumAggregate_1 = require("../outputs/IssueSumAggregate");
let IssueGroupBy = class IssueGroupBy {
};
exports.IssueGroupBy = IssueGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "cycleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueGroupBy.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssueGroupBy.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "subtaskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "parentIssueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueGroupBy.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssueGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssueGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCountAggregate_1.IssueCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCountAggregate_1.IssueCountAggregate)
], IssueGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueAvgAggregate_1.IssueAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueAvgAggregate_1.IssueAvgAggregate)
], IssueGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueSumAggregate_1.IssueSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueSumAggregate_1.IssueSumAggregate)
], IssueGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueMinAggregate_1.IssueMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueMinAggregate_1.IssueMinAggregate)
], IssueGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueMaxAggregate_1.IssueMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueMaxAggregate_1.IssueMaxAggregate)
], IssueGroupBy.prototype, "_max", void 0);
exports.IssueGroupBy = IssueGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueGroupBy", {})
], IssueGroupBy);
