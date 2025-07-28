"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyWhereInput_1 = require("../../../inputs/TaskDependencyWhereInput");
let DeleteManyTaskDependencyArgs = class DeleteManyTaskDependencyArgs {
};
exports.DeleteManyTaskDependencyArgs = DeleteManyTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], DeleteManyTaskDependencyArgs.prototype, "where", void 0);
exports.DeleteManyTaskDependencyArgs = DeleteManyTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTaskDependencyArgs);
