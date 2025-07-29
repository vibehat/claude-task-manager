"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskRelationFilter = class TaskRelationFilter {
};
exports.TaskRelationFilter = TaskRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskRelationFilter.prototype, "isNot", void 0);
exports.TaskRelationFilter = TaskRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskRelationFilter", {})
], TaskRelationFilter);
