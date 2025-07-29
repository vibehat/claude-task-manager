"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityAvgAggregate_1 = require("../outputs/IssuePriorityAvgAggregate");
const IssuePriorityCountAggregate_1 = require("../outputs/IssuePriorityCountAggregate");
const IssuePriorityMaxAggregate_1 = require("../outputs/IssuePriorityMaxAggregate");
const IssuePriorityMinAggregate_1 = require("../outputs/IssuePriorityMinAggregate");
const IssuePrioritySumAggregate_1 = require("../outputs/IssuePrioritySumAggregate");
let IssuePriorityGroupBy = class IssuePriorityGroupBy {
};
exports.IssuePriorityGroupBy = IssuePriorityGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityGroupBy.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriorityGroupBy.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCountAggregate_1.IssuePriorityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCountAggregate_1.IssuePriorityCountAggregate)
], IssuePriorityGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityAvgAggregate_1.IssuePriorityAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityAvgAggregate_1.IssuePriorityAvgAggregate)
], IssuePriorityGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePrioritySumAggregate_1.IssuePrioritySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePrioritySumAggregate_1.IssuePrioritySumAggregate)
], IssuePriorityGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityMinAggregate_1.IssuePriorityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityMinAggregate_1.IssuePriorityMinAggregate)
], IssuePriorityGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityMaxAggregate_1.IssuePriorityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityMaxAggregate_1.IssuePriorityMaxAggregate)
], IssuePriorityGroupBy.prototype, "_max", void 0);
exports.IssuePriorityGroupBy = IssuePriorityGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePriorityGroupBy", {})
], IssuePriorityGroupBy);
