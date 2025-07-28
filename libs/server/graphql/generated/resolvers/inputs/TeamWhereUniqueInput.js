"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CycleListRelationFilter_1 = require("../inputs/CycleListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TeamMemberListRelationFilter_1 = require("../inputs/TeamMemberListRelationFilter");
const TeamProjectListRelationFilter_1 = require("../inputs/TeamProjectListRelationFilter");
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamWhereUniqueInput = class TeamWhereUniqueInput {
};
exports.TeamWhereUniqueInput = TeamWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamWhereInput_1.TeamWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamWhereInput_1.TeamWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamWhereInput_1.TeamWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereUniqueInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], TeamWhereUniqueInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamWhereUniqueInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TeamWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TeamWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberListRelationFilter_1.TeamMemberListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberListRelationFilter_1.TeamMemberListRelationFilter)
], TeamWhereUniqueInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectListRelationFilter_1.TeamProjectListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectListRelationFilter_1.TeamProjectListRelationFilter)
], TeamWhereUniqueInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleListRelationFilter_1.CycleListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleListRelationFilter_1.CycleListRelationFilter)
], TeamWhereUniqueInput.prototype, "cycles", void 0);
exports.TeamWhereUniqueInput = TeamWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamWhereUniqueInput", {})
], TeamWhereUniqueInput);
