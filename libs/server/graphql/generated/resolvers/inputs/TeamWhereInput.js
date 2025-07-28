"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CycleListRelationFilter_1 = require("../inputs/CycleListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TeamMemberListRelationFilter_1 = require("../inputs/TeamMemberListRelationFilter");
const TeamProjectListRelationFilter_1 = require("../inputs/TeamProjectListRelationFilter");
let TeamWhereInput = class TeamWhereInput {
};
exports.TeamWhereInput = TeamWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], TeamWhereInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TeamWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TeamWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberListRelationFilter_1.TeamMemberListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberListRelationFilter_1.TeamMemberListRelationFilter)
], TeamWhereInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectListRelationFilter_1.TeamProjectListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectListRelationFilter_1.TeamProjectListRelationFilter)
], TeamWhereInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleListRelationFilter_1.CycleListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleListRelationFilter_1.CycleListRelationFilter)
], TeamWhereInput.prototype, "cycles", void 0);
exports.TeamWhereInput = TeamWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamWhereInput", {})
], TeamWhereInput);
