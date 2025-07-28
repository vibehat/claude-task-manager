"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateWithoutDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TaskUpdateOneRequiredWithoutDependenciesNestedInput_1 = require("../inputs/TaskUpdateOneRequiredWithoutDependenciesNestedInput");
let TaskDependencyUpdateWithoutDependsOnInput = class TaskDependencyUpdateWithoutDependsOnInput {
};
exports.TaskDependencyUpdateWithoutDependsOnInput = TaskDependencyUpdateWithoutDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskDependencyUpdateWithoutDependsOnInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutDependenciesNestedInput_1.TaskUpdateOneRequiredWithoutDependenciesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneRequiredWithoutDependenciesNestedInput_1.TaskUpdateOneRequiredWithoutDependenciesNestedInput)
], TaskDependencyUpdateWithoutDependsOnInput.prototype, "task", void 0);
exports.TaskDependencyUpdateWithoutDependsOnInput = TaskDependencyUpdateWithoutDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateWithoutDependsOnInput", {})
], TaskDependencyUpdateWithoutDependsOnInput);
