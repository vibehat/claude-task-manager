"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusWhereInput_1 = require("../../../inputs/IssueStatusWhereInput");
let IssueIssueStatusArgs = class IssueIssueStatusArgs {
};
exports.IssueIssueStatusArgs = IssueIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueIssueStatusArgs.prototype, "where", void 0);
exports.IssueIssueStatusArgs = IssueIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], IssueIssueStatusArgs);
