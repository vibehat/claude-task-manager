"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TaskUpdateOneRequiredWithoutDependentsNestedInput_1 = require("../inputs/TaskUpdateOneRequiredWithoutDependentsNestedInput");
let TaskDependencyUpdateWithoutTaskInput = class TaskDependencyUpdateWithoutTaskInput {
};
exports.TaskDependencyUpdateWithoutTaskInput = TaskDependencyUpdateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskDependencyUpdateWithoutTaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutDependentsNestedInput_1.TaskUpdateOneRequiredWithoutDependentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneRequiredWithoutDependentsNestedInput_1.TaskUpdateOneRequiredWithoutDependentsNestedInput)
], TaskDependencyUpdateWithoutTaskInput.prototype, "dependsOn", void 0);
exports.TaskDependencyUpdateWithoutTaskInput = TaskDependencyUpdateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateWithoutTaskInput", {})
], TaskDependencyUpdateWithoutTaskInput);
