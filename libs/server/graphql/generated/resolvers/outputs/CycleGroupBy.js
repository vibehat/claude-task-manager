"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleAvgAggregate_1 = require("../outputs/CycleAvgAggregate");
const CycleCountAggregate_1 = require("../outputs/CycleCountAggregate");
const CycleMaxAggregate_1 = require("../outputs/CycleMaxAggregate");
const CycleMinAggregate_1 = require("../outputs/CycleMinAggregate");
const CycleSumAggregate_1 = require("../outputs/CycleSumAggregate");
let CycleGroupBy = class CycleGroupBy {
};
exports.CycleGroupBy = CycleGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CycleGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CycleGroupBy.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CycleGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CycleGroupBy.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleGroupBy.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleGroupBy.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CycleGroupBy.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCountAggregate_1.CycleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCountAggregate_1.CycleCountAggregate)
], CycleGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleAvgAggregate_1.CycleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleAvgAggregate_1.CycleAvgAggregate)
], CycleGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleSumAggregate_1.CycleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleSumAggregate_1.CycleSumAggregate)
], CycleGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleMinAggregate_1.CycleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleMinAggregate_1.CycleMinAggregate)
], CycleGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleMaxAggregate_1.CycleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleMaxAggregate_1.CycleMaxAggregate)
], CycleGroupBy.prototype, "_max", void 0);
exports.CycleGroupBy = CycleGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CycleGroupBy", {})
], CycleGroupBy);
