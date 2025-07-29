"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateOrConnectWithoutLeadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateWithoutLeadInput_1 = require("../inputs/ProjectCreateWithoutLeadInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectCreateOrConnectWithoutLeadInput = class ProjectCreateOrConnectWithoutLeadInput {
};
exports.ProjectCreateOrConnectWithoutLeadInput = ProjectCreateOrConnectWithoutLeadInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectCreateOrConnectWithoutLeadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutLeadInput_1.ProjectCreateWithoutLeadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutLeadInput_1.ProjectCreateWithoutLeadInput)
], ProjectCreateOrConnectWithoutLeadInput.prototype, "create", void 0);
exports.ProjectCreateOrConnectWithoutLeadInput = ProjectCreateOrConnectWithoutLeadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateOrConnectWithoutLeadInput", {})
], ProjectCreateOrConnectWithoutLeadInput);
