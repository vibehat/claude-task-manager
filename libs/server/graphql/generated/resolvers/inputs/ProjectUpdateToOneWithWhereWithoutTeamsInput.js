"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateToOneWithWhereWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateWithoutTeamsInput_1 = require("../inputs/ProjectUpdateWithoutTeamsInput");
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
let ProjectUpdateToOneWithWhereWithoutTeamsInput = class ProjectUpdateToOneWithWhereWithoutTeamsInput {
};
exports.ProjectUpdateToOneWithWhereWithoutTeamsInput = ProjectUpdateToOneWithWhereWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectUpdateToOneWithWhereWithoutTeamsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateWithoutTeamsInput_1.ProjectUpdateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateWithoutTeamsInput_1.ProjectUpdateWithoutTeamsInput)
], ProjectUpdateToOneWithWhereWithoutTeamsInput.prototype, "data", void 0);
exports.ProjectUpdateToOneWithWhereWithoutTeamsInput = ProjectUpdateToOneWithWhereWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateToOneWithWhereWithoutTeamsInput", {})
], ProjectUpdateToOneWithWhereWithoutTeamsInput);
