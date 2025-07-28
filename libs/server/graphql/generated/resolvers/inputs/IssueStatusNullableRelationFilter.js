"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusWhereInput_1 = require("../inputs/IssueStatusWhereInput");
let IssueStatusNullableRelationFilter = class IssueStatusNullableRelationFilter {
};
exports.IssueStatusNullableRelationFilter = IssueStatusNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueStatusNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], IssueStatusNullableRelationFilter.prototype, "isNot", void 0);
exports.IssueStatusNullableRelationFilter = IssueStatusNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusNullableRelationFilter", {})
], IssueStatusNullableRelationFilter);
