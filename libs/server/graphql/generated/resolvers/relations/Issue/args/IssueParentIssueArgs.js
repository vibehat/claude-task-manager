"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueParentIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereInput_1 = require("../../../inputs/IssueWhereInput");
let IssueParentIssueArgs = class IssueParentIssueArgs {
};
exports.IssueParentIssueArgs = IssueParentIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueParentIssueArgs.prototype, "where", void 0);
exports.IssueParentIssueArgs = IssueParentIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], IssueParentIssueArgs);
