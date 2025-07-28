"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssue = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueAvgAggregate_1 = require("../outputs/IssueAvgAggregate");
const IssueCountAggregate_1 = require("../outputs/IssueCountAggregate");
const IssueMaxAggregate_1 = require("../outputs/IssueMaxAggregate");
const IssueMinAggregate_1 = require("../outputs/IssueMinAggregate");
const IssueSumAggregate_1 = require("../outputs/IssueSumAggregate");
let AggregateIssue = class AggregateIssue {
};
exports.AggregateIssue = AggregateIssue;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCountAggregate_1.IssueCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCountAggregate_1.IssueCountAggregate)
], AggregateIssue.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueAvgAggregate_1.IssueAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueAvgAggregate_1.IssueAvgAggregate)
], AggregateIssue.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueSumAggregate_1.IssueSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueSumAggregate_1.IssueSumAggregate)
], AggregateIssue.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueMinAggregate_1.IssueMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueMinAggregate_1.IssueMinAggregate)
], AggregateIssue.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueMaxAggregate_1.IssueMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueMaxAggregate_1.IssueMaxAggregate)
], AggregateIssue.prototype, "_max", void 0);
exports.AggregateIssue = AggregateIssue = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateIssue", {})
], AggregateIssue);
