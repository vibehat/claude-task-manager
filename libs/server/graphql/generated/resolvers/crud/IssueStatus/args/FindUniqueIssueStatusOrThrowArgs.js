"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssueStatusOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusWhereUniqueInput_1 = require("../../../inputs/IssueStatusWhereUniqueInput");
let FindUniqueIssueStatusOrThrowArgs = class FindUniqueIssueStatusOrThrowArgs {
};
exports.FindUniqueIssueStatusOrThrowArgs = FindUniqueIssueStatusOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], FindUniqueIssueStatusOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueIssueStatusOrThrowArgs = FindUniqueIssueStatusOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssueStatusOrThrowArgs);
