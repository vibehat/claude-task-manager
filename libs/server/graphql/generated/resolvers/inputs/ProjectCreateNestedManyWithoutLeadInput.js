"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateNestedManyWithoutLeadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateManyLeadInputEnvelope_1 = require("../inputs/ProjectCreateManyLeadInputEnvelope");
const ProjectCreateOrConnectWithoutLeadInput_1 = require("../inputs/ProjectCreateOrConnectWithoutLeadInput");
const ProjectCreateWithoutLeadInput_1 = require("../inputs/ProjectCreateWithoutLeadInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectCreateNestedManyWithoutLeadInput = class ProjectCreateNestedManyWithoutLeadInput {
};
exports.ProjectCreateNestedManyWithoutLeadInput = ProjectCreateNestedManyWithoutLeadInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateWithoutLeadInput_1.ProjectCreateWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectCreateNestedManyWithoutLeadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutLeadInput_1.ProjectCreateOrConnectWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectCreateNestedManyWithoutLeadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateManyLeadInputEnvelope_1.ProjectCreateManyLeadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateManyLeadInputEnvelope_1.ProjectCreateManyLeadInputEnvelope)
], ProjectCreateNestedManyWithoutLeadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectCreateNestedManyWithoutLeadInput.prototype, "connect", void 0);
exports.ProjectCreateNestedManyWithoutLeadInput = ProjectCreateNestedManyWithoutLeadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateNestedManyWithoutLeadInput", {})
], ProjectCreateNestedManyWithoutLeadInput);
