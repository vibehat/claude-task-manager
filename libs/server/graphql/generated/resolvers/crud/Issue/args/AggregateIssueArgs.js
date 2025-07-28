"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByWithRelationInput_1 = require("../../../inputs/IssueOrderByWithRelationInput");
const IssueWhereInput_1 = require("../../../inputs/IssueWhereInput");
const IssueWhereUniqueInput_1 = require("../../../inputs/IssueWhereUniqueInput");
let AggregateIssueArgs = class AggregateIssueArgs {
};
exports.AggregateIssueArgs = AggregateIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], AggregateIssueArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueOrderByWithRelationInput_1.IssueOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateIssueArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], AggregateIssueArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIssueArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIssueArgs.prototype, "skip", void 0);
exports.AggregateIssueArgs = AggregateIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateIssueArgs);
