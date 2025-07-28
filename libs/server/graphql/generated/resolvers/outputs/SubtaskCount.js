"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCountIssuesArgs_1 = require("./args/SubtaskCountIssuesArgs");
let SubtaskCount = class SubtaskCount {
    getIssues(root, args) {
        return root.issues;
    }
};
exports.SubtaskCount = SubtaskCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SubtaskCount, SubtaskCountIssuesArgs_1.SubtaskCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], SubtaskCount.prototype, "getIssues", null);
exports.SubtaskCount = SubtaskCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubtaskCount", {})
], SubtaskCount);
