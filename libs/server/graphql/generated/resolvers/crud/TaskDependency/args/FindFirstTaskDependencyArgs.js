"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyOrderByWithRelationInput_1 = require("../../../inputs/TaskDependencyOrderByWithRelationInput");
const TaskDependencyWhereInput_1 = require("../../../inputs/TaskDependencyWhereInput");
const TaskDependencyWhereUniqueInput_1 = require("../../../inputs/TaskDependencyWhereUniqueInput");
const TaskDependencyScalarFieldEnum_1 = require("../../../../enums/TaskDependencyScalarFieldEnum");
let FindFirstTaskDependencyArgs = class FindFirstTaskDependencyArgs {
};
exports.FindFirstTaskDependencyArgs = FindFirstTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], FindFirstTaskDependencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyOrderByWithRelationInput_1.TaskDependencyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTaskDependencyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], FindFirstTaskDependencyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTaskDependencyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTaskDependencyArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyScalarFieldEnum_1.TaskDependencyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTaskDependencyArgs.prototype, "distinct", void 0);
exports.FindFirstTaskDependencyArgs = FindFirstTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTaskDependencyArgs);
