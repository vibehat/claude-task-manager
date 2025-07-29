"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateInput_1 = require("../../../inputs/TaskDependencyCreateInput");
const TaskDependencyUpdateInput_1 = require("../../../inputs/TaskDependencyUpdateInput");
const TaskDependencyWhereUniqueInput_1 = require("../../../inputs/TaskDependencyWhereUniqueInput");
let UpsertOneTaskDependencyArgs = class UpsertOneTaskDependencyArgs {
};
exports.UpsertOneTaskDependencyArgs = UpsertOneTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], UpsertOneTaskDependencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateInput_1.TaskDependencyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateInput_1.TaskDependencyCreateInput)
], UpsertOneTaskDependencyArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateInput_1.TaskDependencyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateInput_1.TaskDependencyUpdateInput)
], UpsertOneTaskDependencyArgs.prototype, "update", void 0);
exports.UpsertOneTaskDependencyArgs = UpsertOneTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTaskDependencyArgs);
