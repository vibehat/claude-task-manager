"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateManyWithoutDependsOnNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyDependsOnInputEnvelope_1 = require("../inputs/TaskDependencyCreateManyDependsOnInputEnvelope");
const TaskDependencyCreateOrConnectWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateOrConnectWithoutDependsOnInput");
const TaskDependencyCreateWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateWithoutDependsOnInput");
const TaskDependencyScalarWhereInput_1 = require("../inputs/TaskDependencyScalarWhereInput");
const TaskDependencyUpdateManyWithWhereWithoutDependsOnInput_1 = require("../inputs/TaskDependencyUpdateManyWithWhereWithoutDependsOnInput");
const TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput_1 = require("../inputs/TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput");
const TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput_1 = require("../inputs/TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyUpdateManyWithoutDependsOnNestedInput = class TaskDependencyUpdateManyWithoutDependsOnNestedInput {
};
exports.TaskDependencyUpdateManyWithoutDependsOnNestedInput = TaskDependencyUpdateManyWithoutDependsOnNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutDependsOnInput_1.TaskDependencyCreateWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutDependsOnInput_1.TaskDependencyCreateOrConnectWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput_1.TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateManyDependsOnInputEnvelope_1.TaskDependencyCreateManyDependsOnInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateManyDependsOnInputEnvelope_1.TaskDependencyCreateManyDependsOnInputEnvelope)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput_1.TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyUpdateManyWithWhereWithoutDependsOnInput_1.TaskDependencyUpdateManyWithWhereWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput_1.TaskDependencyScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutDependsOnNestedInput.prototype, "deleteMany", void 0);
exports.TaskDependencyUpdateManyWithoutDependsOnNestedInput = TaskDependencyUpdateManyWithoutDependsOnNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateManyWithoutDependsOnNestedInput", {})
], TaskDependencyUpdateManyWithoutDependsOnNestedInput);
