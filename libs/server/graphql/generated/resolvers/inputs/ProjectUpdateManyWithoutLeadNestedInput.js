"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateManyWithoutLeadNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateManyLeadInputEnvelope_1 = require("../inputs/ProjectCreateManyLeadInputEnvelope");
const ProjectCreateOrConnectWithoutLeadInput_1 = require("../inputs/ProjectCreateOrConnectWithoutLeadInput");
const ProjectCreateWithoutLeadInput_1 = require("../inputs/ProjectCreateWithoutLeadInput");
const ProjectScalarWhereInput_1 = require("../inputs/ProjectScalarWhereInput");
const ProjectUpdateManyWithWhereWithoutLeadInput_1 = require("../inputs/ProjectUpdateManyWithWhereWithoutLeadInput");
const ProjectUpdateWithWhereUniqueWithoutLeadInput_1 = require("../inputs/ProjectUpdateWithWhereUniqueWithoutLeadInput");
const ProjectUpsertWithWhereUniqueWithoutLeadInput_1 = require("../inputs/ProjectUpsertWithWhereUniqueWithoutLeadInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectUpdateManyWithoutLeadNestedInput = class ProjectUpdateManyWithoutLeadNestedInput {
};
exports.ProjectUpdateManyWithoutLeadNestedInput = ProjectUpdateManyWithoutLeadNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateWithoutLeadInput_1.ProjectCreateWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutLeadInput_1.ProjectCreateOrConnectWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutLeadInput_1.ProjectUpsertWithWhereUniqueWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateManyLeadInputEnvelope_1.ProjectCreateManyLeadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateManyLeadInputEnvelope_1.ProjectCreateManyLeadInputEnvelope)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutLeadInput_1.ProjectUpdateWithWhereUniqueWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutLeadInput_1.ProjectUpdateManyWithWhereWithoutLeadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectScalarWhereInput_1.ProjectScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectUpdateManyWithoutLeadNestedInput.prototype, "deleteMany", void 0);
exports.ProjectUpdateManyWithoutLeadNestedInput = ProjectUpdateManyWithoutLeadNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateManyWithoutLeadNestedInput", {})
], ProjectUpdateManyWithoutLeadNestedInput);
