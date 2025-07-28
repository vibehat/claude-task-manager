"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateOrConnectWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateWithoutTeamsInput_1 = require("../inputs/ProjectCreateWithoutTeamsInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectCreateOrConnectWithoutTeamsInput = class ProjectCreateOrConnectWithoutTeamsInput {
};
exports.ProjectCreateOrConnectWithoutTeamsInput = ProjectCreateOrConnectWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectCreateOrConnectWithoutTeamsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput)
], ProjectCreateOrConnectWithoutTeamsInput.prototype, "create", void 0);
exports.ProjectCreateOrConnectWithoutTeamsInput = ProjectCreateOrConnectWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateOrConnectWithoutTeamsInput", {})
], ProjectCreateOrConnectWithoutTeamsInput);
