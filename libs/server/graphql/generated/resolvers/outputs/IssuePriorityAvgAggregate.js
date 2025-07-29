"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssuePriorityAvgAggregate = class IssuePriorityAvgAggregate {
};
exports.IssuePriorityAvgAggregate = IssuePriorityAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriorityAvgAggregate.prototype, "order", void 0);
exports.IssuePriorityAvgAggregate = IssuePriorityAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePriorityAvgAggregate", {})
], IssuePriorityAvgAggregate);
