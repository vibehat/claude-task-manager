"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateNestedOneWithoutTeamsInput_1 = require("../inputs/ProjectCreateNestedOneWithoutTeamsInput");
let TeamProjectCreateWithoutTeamInput = class TeamProjectCreateWithoutTeamInput {
};
exports.TeamProjectCreateWithoutTeamInput = TeamProjectCreateWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateWithoutTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTeamsInput_1.ProjectCreateNestedOneWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedOneWithoutTeamsInput_1.ProjectCreateNestedOneWithoutTeamsInput)
], TeamProjectCreateWithoutTeamInput.prototype, "project", void 0);
exports.TeamProjectCreateWithoutTeamInput = TeamProjectCreateWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateWithoutTeamInput", {})
], TeamProjectCreateWithoutTeamInput);
