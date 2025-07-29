"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereUniqueInput_1 = require("../../../inputs/IssueWhereUniqueInput");
let FindUniqueIssueArgs = class FindUniqueIssueArgs {
};
exports.FindUniqueIssueArgs = FindUniqueIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], FindUniqueIssueArgs.prototype, "where", void 0);
exports.FindUniqueIssueArgs = FindUniqueIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssueArgs);
