"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CycleAvgAggregate = class CycleAvgAggregate {
};
exports.CycleAvgAggregate = CycleAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CycleAvgAggregate.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CycleAvgAggregate.prototype, "progress", void 0);
exports.CycleAvgAggregate = CycleAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CycleAvgAggregate", {})
], CycleAvgAggregate);
