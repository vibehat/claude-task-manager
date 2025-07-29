"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueSumAggregate = class IssueSumAggregate {
};
exports.IssueSumAggregate = IssueSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssueSumAggregate.prototype, "taskId", void 0);
exports.IssueSumAggregate = IssueSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueSumAggregate", {})
], IssueSumAggregate);
