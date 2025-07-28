"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusWhereUniqueInput_1 = require("../../../inputs/IssueStatusWhereUniqueInput");
let FindUniqueIssueStatusArgs = class FindUniqueIssueStatusArgs {
};
exports.FindUniqueIssueStatusArgs = FindUniqueIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], FindUniqueIssueStatusArgs.prototype, "where", void 0);
exports.FindUniqueIssueStatusArgs = FindUniqueIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssueStatusArgs);
