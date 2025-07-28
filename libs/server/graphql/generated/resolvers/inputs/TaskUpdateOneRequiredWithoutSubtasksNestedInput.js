"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateOneRequiredWithoutSubtasksNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutSubtasksInput_1 = require("../inputs/TaskCreateOrConnectWithoutSubtasksInput");
const TaskCreateWithoutSubtasksInput_1 = require("../inputs/TaskCreateWithoutSubtasksInput");
const TaskUpdateToOneWithWhereWithoutSubtasksInput_1 = require("../inputs/TaskUpdateToOneWithWhereWithoutSubtasksInput");
const TaskUpsertWithoutSubtasksInput_1 = require("../inputs/TaskUpsertWithoutSubtasksInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateOneRequiredWithoutSubtasksNestedInput = class TaskUpdateOneRequiredWithoutSubtasksNestedInput {
};
exports.TaskUpdateOneRequiredWithoutSubtasksNestedInput = TaskUpdateOneRequiredWithoutSubtasksNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutSubtasksInput_1.TaskCreateWithoutSubtasksInput)
], TaskUpdateOneRequiredWithoutSubtasksNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutSubtasksInput_1.TaskCreateOrConnectWithoutSubtasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutSubtasksInput_1.TaskCreateOrConnectWithoutSubtasksInput)
], TaskUpdateOneRequiredWithoutSubtasksNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpsertWithoutSubtasksInput_1.TaskUpsertWithoutSubtasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpsertWithoutSubtasksInput_1.TaskUpsertWithoutSubtasksInput)
], TaskUpdateOneRequiredWithoutSubtasksNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateOneRequiredWithoutSubtasksNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutSubtasksInput_1.TaskUpdateToOneWithWhereWithoutSubtasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateToOneWithWhereWithoutSubtasksInput_1.TaskUpdateToOneWithWhereWithoutSubtasksInput)
], TaskUpdateOneRequiredWithoutSubtasksNestedInput.prototype, "update", void 0);
exports.TaskUpdateOneRequiredWithoutSubtasksNestedInput = TaskUpdateOneRequiredWithoutSubtasksNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutSubtasksNestedInput", {})
], TaskUpdateOneRequiredWithoutSubtasksNestedInput);
