"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCountIssuesArgs_1 = require("./args/CycleCountIssuesArgs");
let CycleCount = class CycleCount {
    getIssues(root, args) {
        return root.issues;
    }
};
exports.CycleCount = CycleCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CycleCount, CycleCountIssuesArgs_1.CycleCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CycleCount.prototype, "getIssues", null);
exports.CycleCount = CycleCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CycleCount", {})
], CycleCount);
