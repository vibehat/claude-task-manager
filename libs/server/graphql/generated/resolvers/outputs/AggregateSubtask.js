"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubtask = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskAvgAggregate_1 = require("../outputs/SubtaskAvgAggregate");
const SubtaskCountAggregate_1 = require("../outputs/SubtaskCountAggregate");
const SubtaskMaxAggregate_1 = require("../outputs/SubtaskMaxAggregate");
const SubtaskMinAggregate_1 = require("../outputs/SubtaskMinAggregate");
const SubtaskSumAggregate_1 = require("../outputs/SubtaskSumAggregate");
let AggregateSubtask = class AggregateSubtask {
};
exports.AggregateSubtask = AggregateSubtask;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCountAggregate_1.SubtaskCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCountAggregate_1.SubtaskCountAggregate)
], AggregateSubtask.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskAvgAggregate_1.SubtaskAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskAvgAggregate_1.SubtaskAvgAggregate)
], AggregateSubtask.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskSumAggregate_1.SubtaskSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskSumAggregate_1.SubtaskSumAggregate)
], AggregateSubtask.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskMinAggregate_1.SubtaskMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskMinAggregate_1.SubtaskMinAggregate)
], AggregateSubtask.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskMaxAggregate_1.SubtaskMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskMaxAggregate_1.SubtaskMaxAggregate)
], AggregateSubtask.prototype, "_max", void 0);
exports.AggregateSubtask = AggregateSubtask = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSubtask", {})
], AggregateSubtask);
