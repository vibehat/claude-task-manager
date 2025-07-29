"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueLabel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCountAggregate_1 = require("../outputs/IssueLabelCountAggregate");
const IssueLabelMaxAggregate_1 = require("../outputs/IssueLabelMaxAggregate");
const IssueLabelMinAggregate_1 = require("../outputs/IssueLabelMinAggregate");
let AggregateIssueLabel = class AggregateIssueLabel {
};
exports.AggregateIssueLabel = AggregateIssueLabel;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCountAggregate_1.IssueLabelCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCountAggregate_1.IssueLabelCountAggregate)
], AggregateIssueLabel.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelMinAggregate_1.IssueLabelMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelMinAggregate_1.IssueLabelMinAggregate)
], AggregateIssueLabel.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelMaxAggregate_1.IssueLabelMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelMaxAggregate_1.IssueLabelMaxAggregate)
], AggregateIssueLabel.prototype, "_max", void 0);
exports.AggregateIssueLabel = AggregateIssueLabel = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateIssueLabel", {})
], AggregateIssueLabel);
