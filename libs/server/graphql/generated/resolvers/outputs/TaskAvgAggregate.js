"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskAvgAggregate = class TaskAvgAggregate {
};
exports.TaskAvgAggregate = TaskAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskAvgAggregate.prototype, "complexity", void 0);
exports.TaskAvgAggregate = TaskAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskAvgAggregate", {})
], TaskAvgAggregate);
