"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateInput_1 = require("../../../inputs/IssueStatusCreateInput");
const IssueStatusUpdateInput_1 = require("../../../inputs/IssueStatusUpdateInput");
const IssueStatusWhereUniqueInput_1 = require("../../../inputs/IssueStatusWhereUniqueInput");
let UpsertOneIssueStatusArgs = class UpsertOneIssueStatusArgs {
};
exports.UpsertOneIssueStatusArgs = UpsertOneIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], UpsertOneIssueStatusArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateInput_1.IssueStatusCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateInput_1.IssueStatusCreateInput)
], UpsertOneIssueStatusArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateInput_1.IssueStatusUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateInput_1.IssueStatusUpdateInput)
], UpsertOneIssueStatusArgs.prototype, "update", void 0);
exports.UpsertOneIssueStatusArgs = UpsertOneIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneIssueStatusArgs);
