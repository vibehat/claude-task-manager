"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyOrderByWithRelationInput_1 = require("../../../inputs/TaskDependencyOrderByWithRelationInput");
const TaskDependencyWhereInput_1 = require("../../../inputs/TaskDependencyWhereInput");
const TaskDependencyWhereUniqueInput_1 = require("../../../inputs/TaskDependencyWhereUniqueInput");
const TaskDependencyScalarFieldEnum_1 = require("../../../../enums/TaskDependencyScalarFieldEnum");
let TaskDependenciesArgs = class TaskDependenciesArgs {
};
exports.TaskDependenciesArgs = TaskDependenciesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], TaskDependenciesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyOrderByWithRelationInput_1.TaskDependencyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependenciesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependenciesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependenciesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependenciesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyScalarFieldEnum_1.TaskDependencyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependenciesArgs.prototype, "distinct", void 0);
exports.TaskDependenciesArgs = TaskDependenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TaskDependenciesArgs);
