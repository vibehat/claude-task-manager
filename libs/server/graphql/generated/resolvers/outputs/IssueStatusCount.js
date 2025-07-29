"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCountIssuesArgs_1 = require("./args/IssueStatusCountIssuesArgs");
let IssueStatusCount = class IssueStatusCount {
    getIssues(root, args) {
        return root.issues;
    }
};
exports.IssueStatusCount = IssueStatusCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssueStatusCount, IssueStatusCountIssuesArgs_1.IssueStatusCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], IssueStatusCount.prototype, "getIssues", null);
exports.IssueStatusCount = IssueStatusCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueStatusCount", {})
], IssueStatusCount);
