"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssuePriority = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityAvgAggregate_1 = require("../outputs/IssuePriorityAvgAggregate");
const IssuePriorityCountAggregate_1 = require("../outputs/IssuePriorityCountAggregate");
const IssuePriorityMaxAggregate_1 = require("../outputs/IssuePriorityMaxAggregate");
const IssuePriorityMinAggregate_1 = require("../outputs/IssuePriorityMinAggregate");
const IssuePrioritySumAggregate_1 = require("../outputs/IssuePrioritySumAggregate");
let AggregateIssuePriority = class AggregateIssuePriority {
};
exports.AggregateIssuePriority = AggregateIssuePriority;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCountAggregate_1.IssuePriorityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCountAggregate_1.IssuePriorityCountAggregate)
], AggregateIssuePriority.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityAvgAggregate_1.IssuePriorityAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityAvgAggregate_1.IssuePriorityAvgAggregate)
], AggregateIssuePriority.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePrioritySumAggregate_1.IssuePrioritySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePrioritySumAggregate_1.IssuePrioritySumAggregate)
], AggregateIssuePriority.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityMinAggregate_1.IssuePriorityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityMinAggregate_1.IssuePriorityMinAggregate)
], AggregateIssuePriority.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityMaxAggregate_1.IssuePriorityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityMaxAggregate_1.IssuePriorityMaxAggregate)
], AggregateIssuePriority.prototype, "_max", void 0);
exports.AggregateIssuePriority = AggregateIssuePriority = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateIssuePriority", {})
], AggregateIssuePriority);
