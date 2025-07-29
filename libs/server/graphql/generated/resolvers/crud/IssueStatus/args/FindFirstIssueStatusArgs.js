"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusOrderByWithRelationInput_1 = require("../../../inputs/IssueStatusOrderByWithRelationInput");
const IssueStatusWhereInput_1 = require("../../../inputs/IssueStatusWhereInput");
const IssueStatusWhereUniqueInput_1 = require("../../../inputs/IssueStatusWhereUniqueInput");
const IssueStatusScalarFieldEnum_1 = require("../../../../enums/IssueStatusScalarFieldEnum");
let FindFirstIssueStatusArgs = class FindFirstIssueStatusArgs {
};
exports.FindFirstIssueStatusArgs = FindFirstIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], FindFirstIssueStatusArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusOrderByWithRelationInput_1.IssueStatusOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstIssueStatusArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], FindFirstIssueStatusArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstIssueStatusArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstIssueStatusArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusScalarFieldEnum_1.IssueStatusScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstIssueStatusArgs.prototype, "distinct", void 0);
exports.FindFirstIssueStatusArgs = FindFirstIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstIssueStatusArgs);
