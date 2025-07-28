"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateManyWithoutTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyTaskInputEnvelope_1 = require("../inputs/TaskDependencyCreateManyTaskInputEnvelope");
const TaskDependencyCreateOrConnectWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateOrConnectWithoutTaskInput");
const TaskDependencyCreateWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateWithoutTaskInput");
const TaskDependencyScalarWhereInput_1 = require("../inputs/TaskDependencyScalarWhereInput");
const TaskDependencyUpdateManyWithWhereWithoutTaskInput_1 = require("../inputs/TaskDependencyUpdateManyWithWhereWithoutTaskInput");
const TaskDependencyUpdateWithWhereUniqueWithoutTaskInput_1 = require("../inputs/TaskDependencyUpdateWithWhereUniqueWithoutTaskInput");
const TaskDependencyUpsertWithWhereUniqueWithoutTaskInput_1 = require("../inputs/TaskDependencyUpsertWithWhereUniqueWithoutTaskInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyUpdateManyWithoutTaskNestedInput = class TaskDependencyUpdateManyWithoutTaskNestedInput {
};
exports.TaskDependencyUpdateManyWithoutTaskNestedInput = TaskDependencyUpdateManyWithoutTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutTaskInput_1.TaskDependencyCreateWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutTaskInput_1.TaskDependencyCreateOrConnectWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyUpsertWithWhereUniqueWithoutTaskInput_1.TaskDependencyUpsertWithWhereUniqueWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateManyTaskInputEnvelope_1.TaskDependencyCreateManyTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateManyTaskInputEnvelope_1.TaskDependencyCreateManyTaskInputEnvelope)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyUpdateWithWhereUniqueWithoutTaskInput_1.TaskDependencyUpdateWithWhereUniqueWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyUpdateManyWithWhereWithoutTaskInput_1.TaskDependencyUpdateManyWithWhereWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput_1.TaskDependencyScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyUpdateManyWithoutTaskNestedInput.prototype, "deleteMany", void 0);
exports.TaskDependencyUpdateManyWithoutTaskNestedInput = TaskDependencyUpdateManyWithoutTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateManyWithoutTaskNestedInput", {})
], TaskDependencyUpdateManyWithoutTaskNestedInput);
