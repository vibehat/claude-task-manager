"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
let IssueRelationFilter = class IssueRelationFilter {
};
exports.IssueRelationFilter = IssueRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueRelationFilter.prototype, "isNot", void 0);
exports.IssueRelationFilter = IssueRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueRelationFilter", {})
], IssueRelationFilter);
