"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyUpdateManyMutationInput_1 = require("../../../inputs/TaskDependencyUpdateManyMutationInput");
const TaskDependencyWhereInput_1 = require("../../../inputs/TaskDependencyWhereInput");
let UpdateManyTaskDependencyArgs = class UpdateManyTaskDependencyArgs {
};
exports.UpdateManyTaskDependencyArgs = UpdateManyTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateManyMutationInput_1.TaskDependencyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateManyMutationInput_1.TaskDependencyUpdateManyMutationInput)
], UpdateManyTaskDependencyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], UpdateManyTaskDependencyArgs.prototype, "where", void 0);
exports.UpdateManyTaskDependencyArgs = UpdateManyTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTaskDependencyArgs);
