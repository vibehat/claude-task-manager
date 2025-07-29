"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateInput_1 = require("../../../inputs/TaskDependencyCreateInput");
let CreateOneTaskDependencyArgs = class CreateOneTaskDependencyArgs {
};
exports.CreateOneTaskDependencyArgs = CreateOneTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateInput_1.TaskDependencyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateInput_1.TaskDependencyCreateInput)
], CreateOneTaskDependencyArgs.prototype, "data", void 0);
exports.CreateOneTaskDependencyArgs = CreateOneTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTaskDependencyArgs);
