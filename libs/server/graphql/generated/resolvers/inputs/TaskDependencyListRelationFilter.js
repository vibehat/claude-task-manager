"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyWhereInput_1 = require("../inputs/TaskDependencyWhereInput");
let TaskDependencyListRelationFilter = class TaskDependencyListRelationFilter {
};
exports.TaskDependencyListRelationFilter = TaskDependencyListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], TaskDependencyListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], TaskDependencyListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], TaskDependencyListRelationFilter.prototype, "none", void 0);
exports.TaskDependencyListRelationFilter = TaskDependencyListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyListRelationFilter", {})
], TaskDependencyListRelationFilter);
