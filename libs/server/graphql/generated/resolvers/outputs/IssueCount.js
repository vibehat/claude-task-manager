"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCountLabelsArgs_1 = require("./args/IssueCountLabelsArgs");
const IssueCountSubIssuesArgs_1 = require("./args/IssueCountSubIssuesArgs");
let IssueCount = class IssueCount {
    getLabels(root, args) {
        return root.labels;
    }
    getSubIssues(root, args) {
        return root.subIssues;
    }
};
exports.IssueCount = IssueCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "labels",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssueCount, IssueCountLabelsArgs_1.IssueCountLabelsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], IssueCount.prototype, "getLabels", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "subIssues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssueCount, IssueCountSubIssuesArgs_1.IssueCountSubIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], IssueCount.prototype, "getSubIssues", null);
exports.IssueCount = IssueCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueCount", {})
], IssueCount);
