"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyInput_1 = require("../../../inputs/TaskCreateManyInput");
let CreateManyTaskArgs = class CreateManyTaskArgs {
};
exports.CreateManyTaskArgs = CreateManyTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyInput_1.TaskCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTaskArgs.prototype, "data", void 0);
exports.CreateManyTaskArgs = CreateManyTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTaskArgs);
