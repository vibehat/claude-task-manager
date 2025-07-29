"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleWhereInput_1 = require("../inputs/CycleWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TeamRelationFilter_1 = require("../inputs/TeamRelationFilter");
let CycleWhereUniqueInput = class CycleWhereUniqueInput {
};
exports.CycleWhereUniqueInput = CycleWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereInput_1.CycleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereInput_1.CycleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleWhereInput_1.CycleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CycleWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CycleWhereUniqueInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CycleWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CycleWhereUniqueInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereUniqueInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereUniqueInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CycleWhereUniqueInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CycleWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamRelationFilter_1.TeamRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamRelationFilter_1.TeamRelationFilter)
], CycleWhereUniqueInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], CycleWhereUniqueInput.prototype, "issues", void 0);
exports.CycleWhereUniqueInput = CycleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleWhereUniqueInput", {})
], CycleWhereUniqueInput);
