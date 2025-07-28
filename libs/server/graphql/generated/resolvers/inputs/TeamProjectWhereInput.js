"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectRelationFilter_1 = require("../inputs/ProjectRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TeamRelationFilter_1 = require("../inputs/TeamRelationFilter");
let TeamProjectWhereInput = class TeamProjectWhereInput {
};
exports.TeamProjectWhereInput = TeamProjectWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectWhereInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectWhereInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamRelationFilter_1.TeamRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamRelationFilter_1.TeamRelationFilter)
], TeamProjectWhereInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectRelationFilter_1.ProjectRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectRelationFilter_1.ProjectRelationFilter)
], TeamProjectWhereInput.prototype, "project", void 0);
exports.TeamProjectWhereInput = TeamProjectWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectWhereInput", {})
], TeamProjectWhereInput);
