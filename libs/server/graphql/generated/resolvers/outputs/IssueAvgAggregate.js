"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueAvgAggregate = class IssueAvgAggregate {
};
exports.IssueAvgAggregate = IssueAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssueAvgAggregate.prototype, "taskId", void 0);
exports.IssueAvgAggregate = IssueAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueAvgAggregate", {})
], IssueAvgAggregate);
