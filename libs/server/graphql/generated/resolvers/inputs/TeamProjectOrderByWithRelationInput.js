"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectOrderByWithRelationInput_1 = require("../inputs/ProjectOrderByWithRelationInput");
const TeamOrderByWithRelationInput_1 = require("../inputs/TeamOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamProjectOrderByWithRelationInput = class TeamProjectOrderByWithRelationInput {
};
exports.TeamProjectOrderByWithRelationInput = TeamProjectOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectOrderByWithRelationInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectOrderByWithRelationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput)
], TeamProjectOrderByWithRelationInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput_1.ProjectOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectOrderByWithRelationInput_1.ProjectOrderByWithRelationInput)
], TeamProjectOrderByWithRelationInput.prototype, "project", void 0);
exports.TeamProjectOrderByWithRelationInput = TeamProjectOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectOrderByWithRelationInput", {})
], TeamProjectOrderByWithRelationInput);
