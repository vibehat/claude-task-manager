"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyUpdateInput_1 = require("../../../inputs/TaskDependencyUpdateInput");
const TaskDependencyWhereUniqueInput_1 = require("../../../inputs/TaskDependencyWhereUniqueInput");
let UpdateOneTaskDependencyArgs = class UpdateOneTaskDependencyArgs {
};
exports.UpdateOneTaskDependencyArgs = UpdateOneTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateInput_1.TaskDependencyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateInput_1.TaskDependencyUpdateInput)
], UpdateOneTaskDependencyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], UpdateOneTaskDependencyArgs.prototype, "where", void 0);
exports.UpdateOneTaskDependencyArgs = UpdateOneTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTaskDependencyArgs);
