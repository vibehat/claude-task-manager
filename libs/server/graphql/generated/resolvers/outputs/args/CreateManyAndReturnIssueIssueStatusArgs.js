"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusWhereInput_1 = require("../../inputs/IssueStatusWhereInput");
let CreateManyAndReturnIssueIssueStatusArgs = class CreateManyAndReturnIssueIssueStatusArgs {
};
exports.CreateManyAndReturnIssueIssueStatusArgs = CreateManyAndReturnIssueIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], CreateManyAndReturnIssueIssueStatusArgs.prototype, "where", void 0);
exports.CreateManyAndReturnIssueIssueStatusArgs = CreateManyAndReturnIssueIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnIssueIssueStatusArgs);
