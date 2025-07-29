"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let TaskDependencyUpdateManyMutationInput = class TaskDependencyUpdateManyMutationInput {
};
exports.TaskDependencyUpdateManyMutationInput = TaskDependencyUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskDependencyUpdateManyMutationInput.prototype, "createdAt", void 0);
exports.TaskDependencyUpdateManyMutationInput = TaskDependencyUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateManyMutationInput", {})
], TaskDependencyUpdateManyMutationInput);
