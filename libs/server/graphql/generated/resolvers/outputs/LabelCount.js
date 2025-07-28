"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCountIssuesArgs_1 = require("./args/LabelCountIssuesArgs");
let LabelCount = class LabelCount {
    getIssues(root, args) {
        return root.issues;
    }
};
exports.LabelCount = LabelCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [LabelCount, LabelCountIssuesArgs_1.LabelCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], LabelCount.prototype, "getIssues", null);
exports.LabelCount = LabelCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LabelCount", {})
], LabelCount);
