"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateNestedOneWithoutTeamsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateOrConnectWithoutTeamsInput_1 = require("../inputs/ProjectCreateOrConnectWithoutTeamsInput");
const ProjectCreateWithoutTeamsInput_1 = require("../inputs/ProjectCreateWithoutTeamsInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectCreateNestedOneWithoutTeamsInput = class ProjectCreateNestedOneWithoutTeamsInput {
};
exports.ProjectCreateNestedOneWithoutTeamsInput = ProjectCreateNestedOneWithoutTeamsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput)
], ProjectCreateNestedOneWithoutTeamsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTeamsInput_1.ProjectCreateOrConnectWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateOrConnectWithoutTeamsInput_1.ProjectCreateOrConnectWithoutTeamsInput)
], ProjectCreateNestedOneWithoutTeamsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectCreateNestedOneWithoutTeamsInput.prototype, "connect", void 0);
exports.ProjectCreateNestedOneWithoutTeamsInput = ProjectCreateNestedOneWithoutTeamsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateNestedOneWithoutTeamsInput", {})
], ProjectCreateNestedOneWithoutTeamsInput);
