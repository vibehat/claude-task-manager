"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpsertWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateWithoutTeamsInput_1 = require("../inputs/ProjectCreateWithoutTeamsInput");
const ProjectUpdateWithoutTeamsInput_1 = require("../inputs/ProjectUpdateWithoutTeamsInput");
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
let ProjectUpsertWithoutTeamsInput = class ProjectUpsertWithoutTeamsInput {
};
exports.ProjectUpsertWithoutTeamsInput = ProjectUpsertWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateWithoutTeamsInput_1.ProjectUpdateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateWithoutTeamsInput_1.ProjectUpdateWithoutTeamsInput)
], ProjectUpsertWithoutTeamsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput)
], ProjectUpsertWithoutTeamsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectUpsertWithoutTeamsInput.prototype, "where", void 0);
exports.ProjectUpsertWithoutTeamsInput = ProjectUpsertWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpsertWithoutTeamsInput", {})
], ProjectUpsertWithoutTeamsInput);
