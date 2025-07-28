"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePrioritySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssuePrioritySumAggregate = class IssuePrioritySumAggregate {
};
exports.IssuePrioritySumAggregate = IssuePrioritySumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePrioritySumAggregate.prototype, "order", void 0);
exports.IssuePrioritySumAggregate = IssuePrioritySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePrioritySumAggregate", {})
], IssuePrioritySumAggregate);
