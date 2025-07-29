"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateOneRequiredWithoutDependenciesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutDependenciesInput_1 = require("../inputs/TaskCreateOrConnectWithoutDependenciesInput");
const TaskCreateWithoutDependenciesInput_1 = require("../inputs/TaskCreateWithoutDependenciesInput");
const TaskUpdateToOneWithWhereWithoutDependenciesInput_1 = require("../inputs/TaskUpdateToOneWithWhereWithoutDependenciesInput");
const TaskUpsertWithoutDependenciesInput_1 = require("../inputs/TaskUpsertWithoutDependenciesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateOneRequiredWithoutDependenciesNestedInput = class TaskUpdateOneRequiredWithoutDependenciesNestedInput {
};
exports.TaskUpdateOneRequiredWithoutDependenciesNestedInput = TaskUpdateOneRequiredWithoutDependenciesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput)
], TaskUpdateOneRequiredWithoutDependenciesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutDependenciesInput_1.TaskCreateOrConnectWithoutDependenciesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutDependenciesInput_1.TaskCreateOrConnectWithoutDependenciesInput)
], TaskUpdateOneRequiredWithoutDependenciesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpsertWithoutDependenciesInput_1.TaskUpsertWithoutDependenciesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpsertWithoutDependenciesInput_1.TaskUpsertWithoutDependenciesInput)
], TaskUpdateOneRequiredWithoutDependenciesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateOneRequiredWithoutDependenciesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutDependenciesInput_1.TaskUpdateToOneWithWhereWithoutDependenciesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateToOneWithWhereWithoutDependenciesInput_1.TaskUpdateToOneWithWhereWithoutDependenciesInput)
], TaskUpdateOneRequiredWithoutDependenciesNestedInput.prototype, "update", void 0);
exports.TaskUpdateOneRequiredWithoutDependenciesNestedInput = TaskUpdateOneRequiredWithoutDependenciesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutDependenciesNestedInput", {})
], TaskUpdateOneRequiredWithoutDependenciesNestedInput);
