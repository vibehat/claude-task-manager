"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCountSubIssuesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereInput_1 = require("../../inputs/IssueWhereInput");
let IssueCountSubIssuesArgs = class IssueCountSubIssuesArgs {
};
exports.IssueCountSubIssuesArgs = IssueCountSubIssuesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueCountSubIssuesArgs.prototype, "where", void 0);
exports.IssueCountSubIssuesArgs = IssueCountSubIssuesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], IssueCountSubIssuesArgs);
