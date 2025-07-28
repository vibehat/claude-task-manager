"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCycle = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleAvgAggregate_1 = require("../outputs/CycleAvgAggregate");
const CycleCountAggregate_1 = require("../outputs/CycleCountAggregate");
const CycleMaxAggregate_1 = require("../outputs/CycleMaxAggregate");
const CycleMinAggregate_1 = require("../outputs/CycleMinAggregate");
const CycleSumAggregate_1 = require("../outputs/CycleSumAggregate");
let AggregateCycle = class AggregateCycle {
};
exports.AggregateCycle = AggregateCycle;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCountAggregate_1.CycleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCountAggregate_1.CycleCountAggregate)
], AggregateCycle.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleAvgAggregate_1.CycleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleAvgAggregate_1.CycleAvgAggregate)
], AggregateCycle.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleSumAggregate_1.CycleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleSumAggregate_1.CycleSumAggregate)
], AggregateCycle.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleMinAggregate_1.CycleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleMinAggregate_1.CycleMinAggregate)
], AggregateCycle.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleMaxAggregate_1.CycleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleMaxAggregate_1.CycleMaxAggregate)
], AggregateCycle.prototype, "_max", void 0);
exports.AggregateCycle = AggregateCycle = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCycle", {})
], AggregateCycle);
