"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SubtaskSumAggregate = class SubtaskSumAggregate {
};
exports.SubtaskSumAggregate = SubtaskSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SubtaskSumAggregate.prototype, "parentId", void 0);
exports.SubtaskSumAggregate = SubtaskSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubtaskSumAggregate", {})
], SubtaskSumAggregate);
