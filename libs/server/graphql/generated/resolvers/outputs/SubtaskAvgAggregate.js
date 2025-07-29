"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SubtaskAvgAggregate = class SubtaskAvgAggregate {
};
exports.SubtaskAvgAggregate = SubtaskAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SubtaskAvgAggregate.prototype, "parentId", void 0);
exports.SubtaskAvgAggregate = SubtaskAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubtaskAvgAggregate", {})
], SubtaskAvgAggregate);
