"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TaskUpdateOneRequiredWithoutDependenciesNestedInput_1 = require("../inputs/TaskUpdateOneRequiredWithoutDependenciesNestedInput");
const TaskUpdateOneRequiredWithoutDependentsNestedInput_1 = require("../inputs/TaskUpdateOneRequiredWithoutDependentsNestedInput");
let TaskDependencyUpdateInput = class TaskDependencyUpdateInput {
};
exports.TaskDependencyUpdateInput = TaskDependencyUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskDependencyUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutDependenciesNestedInput_1.TaskUpdateOneRequiredWithoutDependenciesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneRequiredWithoutDependenciesNestedInput_1.TaskUpdateOneRequiredWithoutDependenciesNestedInput)
], TaskDependencyUpdateInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutDependentsNestedInput_1.TaskUpdateOneRequiredWithoutDependentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneRequiredWithoutDependentsNestedInput_1.TaskUpdateOneRequiredWithoutDependentsNestedInput)
], TaskDependencyUpdateInput.prototype, "dependsOn", void 0);
exports.TaskDependencyUpdateInput = TaskDependencyUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateInput", {})
], TaskDependencyUpdateInput);
