"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskDependencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyInput_1 = require("../../../inputs/TaskDependencyCreateManyInput");
let CreateManyAndReturnTaskDependencyArgs = class CreateManyAndReturnTaskDependencyArgs {
};
exports.CreateManyAndReturnTaskDependencyArgs = CreateManyAndReturnTaskDependencyArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateManyInput_1.TaskDependencyCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnTaskDependencyArgs.prototype, "data", void 0);
exports.CreateManyAndReturnTaskDependencyArgs = CreateManyAndReturnTaskDependencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnTaskDependencyArgs);
