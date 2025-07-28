"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssueOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereUniqueInput_1 = require("../../../inputs/IssueWhereUniqueInput");
let FindUniqueIssueOrThrowArgs = class FindUniqueIssueOrThrowArgs {
};
exports.FindUniqueIssueOrThrowArgs = FindUniqueIssueOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], FindUniqueIssueOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueIssueOrThrowArgs = FindUniqueIssueOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssueOrThrowArgs);
