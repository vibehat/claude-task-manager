"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TeamRelationFilter_1 = require("../inputs/TeamRelationFilter");
let CycleWhereInput = class CycleWhereInput {
};
exports.CycleWhereInput = CycleWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CycleWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CycleWhereInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CycleWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CycleWhereInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CycleWhereInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamRelationFilter_1.TeamRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamRelationFilter_1.TeamRelationFilter)
], CycleWhereInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], CycleWhereInput.prototype, "issues", void 0);
exports.CycleWhereInput = CycleWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleWhereInput", {})
], CycleWhereInput);
