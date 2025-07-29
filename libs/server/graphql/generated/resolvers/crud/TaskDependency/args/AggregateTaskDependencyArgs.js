"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyOrderByWithRelationInput_1 = require("../../../inputs/TaskDependencyOrderByWithRelationInput");
const TaskDependencyWhereInput_1 = require("../../../inputs/TaskDependencyWhereInput");
const TaskDependencyWhereUniqueInput_1 = require("../../../inputs/TaskDependencyWhereUniqueInput");
let AggregateTaskDependencyArgs = class AggregateTaskDependencyArgs {
};
exports.AggregateTaskDependencyArgs = AggregateTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], AggregateTaskDependencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyOrderByWithRelationInput_1.TaskDependencyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTaskDependencyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], AggregateTaskDependencyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTaskDependencyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTaskDependencyArgs.prototype, "skip", void 0);
exports.AggregateTaskDependencyArgs = AggregateTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTaskDependencyArgs);
