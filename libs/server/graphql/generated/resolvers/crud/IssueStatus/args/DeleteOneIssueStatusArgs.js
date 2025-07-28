"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusWhereUniqueInput_1 = require("../../../inputs/IssueStatusWhereUniqueInput");
let DeleteOneIssueStatusArgs = class DeleteOneIssueStatusArgs {
};
exports.DeleteOneIssueStatusArgs = DeleteOneIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], DeleteOneIssueStatusArgs.prototype, "where", void 0);
exports.DeleteOneIssueStatusArgs = DeleteOneIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneIssueStatusArgs);
