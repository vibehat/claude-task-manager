"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCountAggregate_1 = require("../outputs/IssueStatusCountAggregate");
const IssueStatusMaxAggregate_1 = require("../outputs/IssueStatusMaxAggregate");
const IssueStatusMinAggregate_1 = require("../outputs/IssueStatusMinAggregate");
let AggregateIssueStatus = class AggregateIssueStatus {
};
exports.AggregateIssueStatus = AggregateIssueStatus;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCountAggregate_1.IssueStatusCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCountAggregate_1.IssueStatusCountAggregate)
], AggregateIssueStatus.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusMinAggregate_1.IssueStatusMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusMinAggregate_1.IssueStatusMinAggregate)
], AggregateIssueStatus.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusMaxAggregate_1.IssueStatusMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusMaxAggregate_1.IssueStatusMaxAggregate)
], AggregateIssueStatus.prototype, "_max", void 0);
exports.AggregateIssueStatus = AggregateIssueStatus = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateIssueStatus", {})
], AggregateIssueStatus);
