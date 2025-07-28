"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCountIssuesArgs_1 = require("./args/IssuePriorityCountIssuesArgs");
let IssuePriorityCount = class IssuePriorityCount {
    getIssues(root, args) {
        return root.issues;
    }
};
exports.IssuePriorityCount = IssuePriorityCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssuePriorityCount, IssuePriorityCountIssuesArgs_1.IssuePriorityCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], IssuePriorityCount.prototype, "getIssues", null);
exports.IssuePriorityCount = IssuePriorityCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePriorityCount", {})
], IssuePriorityCount);
