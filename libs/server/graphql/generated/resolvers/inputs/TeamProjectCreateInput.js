"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateNestedOneWithoutTeamsInput_1 = require("../inputs/ProjectCreateNestedOneWithoutTeamsInput");
const TeamCreateNestedOneWithoutProjectsInput_1 = require("../inputs/TeamCreateNestedOneWithoutProjectsInput");
let TeamProjectCreateInput = class TeamProjectCreateInput {
};
exports.TeamProjectCreateInput = TeamProjectCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutProjectsInput_1.TeamCreateNestedOneWithoutProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateNestedOneWithoutProjectsInput_1.TeamCreateNestedOneWithoutProjectsInput)
], TeamProjectCreateInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTeamsInput_1.ProjectCreateNestedOneWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateNestedOneWithoutTeamsInput_1.ProjectCreateNestedOneWithoutTeamsInput)
], TeamProjectCreateInput.prototype, "project", void 0);
exports.TeamProjectCreateInput = TeamProjectCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateInput", {})
], TeamProjectCreateInput);
