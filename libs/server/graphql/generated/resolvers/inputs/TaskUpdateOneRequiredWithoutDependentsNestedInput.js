"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateOneRequiredWithoutDependentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutDependentsInput_1 = require("../inputs/TaskCreateOrConnectWithoutDependentsInput");
const TaskCreateWithoutDependentsInput_1 = require("../inputs/TaskCreateWithoutDependentsInput");
const TaskUpdateToOneWithWhereWithoutDependentsInput_1 = require("../inputs/TaskUpdateToOneWithWhereWithoutDependentsInput");
const TaskUpsertWithoutDependentsInput_1 = require("../inputs/TaskUpsertWithoutDependentsInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateOneRequiredWithoutDependentsNestedInput = class TaskUpdateOneRequiredWithoutDependentsNestedInput {
};
exports.TaskUpdateOneRequiredWithoutDependentsNestedInput = TaskUpdateOneRequiredWithoutDependentsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput)
], TaskUpdateOneRequiredWithoutDependentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutDependentsInput_1.TaskCreateOrConnectWithoutDependentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutDependentsInput_1.TaskCreateOrConnectWithoutDependentsInput)
], TaskUpdateOneRequiredWithoutDependentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpsertWithoutDependentsInput_1.TaskUpsertWithoutDependentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpsertWithoutDependentsInput_1.TaskUpsertWithoutDependentsInput)
], TaskUpdateOneRequiredWithoutDependentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateOneRequiredWithoutDependentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutDependentsInput_1.TaskUpdateToOneWithWhereWithoutDependentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateToOneWithWhereWithoutDependentsInput_1.TaskUpdateToOneWithWhereWithoutDependentsInput)
], TaskUpdateOneRequiredWithoutDependentsNestedInput.prototype, "update", void 0);
exports.TaskUpdateOneRequiredWithoutDependentsNestedInput = TaskUpdateOneRequiredWithoutDependentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutDependentsNestedInput", {})
], TaskUpdateOneRequiredWithoutDependentsNestedInput);
