"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectRelationFilter_1 = require("../inputs/ProjectRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TeamProjectTeamIdProjectIdCompoundUniqueInput_1 = require("../inputs/TeamProjectTeamIdProjectIdCompoundUniqueInput");
const TeamProjectWhereInput_1 = require("../inputs/TeamProjectWhereInput");
const TeamRelationFilter_1 = require("../inputs/TeamRelationFilter");
let TeamProjectWhereUniqueInput = class TeamProjectWhereUniqueInput {
};
exports.TeamProjectWhereUniqueInput = TeamProjectWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectTeamIdProjectIdCompoundUniqueInput_1.TeamProjectTeamIdProjectIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectTeamIdProjectIdCompoundUniqueInput_1.TeamProjectTeamIdProjectIdCompoundUniqueInput)
], TeamProjectWhereUniqueInput.prototype, "teamId_projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereInput_1.TeamProjectWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereInput_1.TeamProjectWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereInput_1.TeamProjectWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectWhereUniqueInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectWhereUniqueInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamRelationFilter_1.TeamRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamRelationFilter_1.TeamRelationFilter)
], TeamProjectWhereUniqueInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectRelationFilter_1.ProjectRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectRelationFilter_1.ProjectRelationFilter)
], TeamProjectWhereUniqueInput.prototype, "project", void 0);
exports.TeamProjectWhereUniqueInput = TeamProjectWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectWhereUniqueInput", {})
], TeamProjectWhereUniqueInput);
