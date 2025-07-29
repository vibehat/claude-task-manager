"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
let IssueListRelationFilter = class IssueListRelationFilter {
};
exports.IssueListRelationFilter = IssueListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueListRelationFilter.prototype, "none", void 0);
exports.IssueListRelationFilter = IssueListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueListRelationFilter", {})
], IssueListRelationFilter);
