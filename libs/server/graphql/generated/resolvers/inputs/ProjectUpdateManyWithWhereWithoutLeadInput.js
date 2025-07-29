"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateManyWithWhereWithoutLeadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectScalarWhereInput_1 = require("../inputs/ProjectScalarWhereInput");
const ProjectUpdateManyMutationInput_1 = require("../inputs/ProjectUpdateManyMutationInput");
let ProjectUpdateManyWithWhereWithoutLeadInput = class ProjectUpdateManyWithWhereWithoutLeadInput {
};
exports.ProjectUpdateManyWithWhereWithoutLeadInput = ProjectUpdateManyWithWhereWithoutLeadInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectScalarWhereInput_1.ProjectScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectScalarWhereInput_1.ProjectScalarWhereInput)
], ProjectUpdateManyWithWhereWithoutLeadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateManyMutationInput_1.ProjectUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateManyMutationInput_1.ProjectUpdateManyMutationInput)
], ProjectUpdateManyWithWhereWithoutLeadInput.prototype, "data", void 0);
exports.ProjectUpdateManyWithWhereWithoutLeadInput = ProjectUpdateManyWithWhereWithoutLeadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateManyWithWhereWithoutLeadInput", {})
], ProjectUpdateManyWithWhereWithoutLeadInput);
