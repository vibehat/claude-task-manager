"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateInput_1 = require("../../../inputs/IssueCreateInput");
const IssueUpdateInput_1 = require("../../../inputs/IssueUpdateInput");
const IssueWhereUniqueInput_1 = require("../../../inputs/IssueWhereUniqueInput");
let UpsertOneIssueArgs = class UpsertOneIssueArgs {
};
exports.UpsertOneIssueArgs = UpsertOneIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], UpsertOneIssueArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateInput_1.IssueCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateInput_1.IssueCreateInput)
], UpsertOneIssueArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateInput_1.IssueUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateInput_1.IssueUpdateInput)
], UpsertOneIssueArgs.prototype, "update", void 0);
exports.UpsertOneIssueArgs = UpsertOneIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneIssueArgs);
