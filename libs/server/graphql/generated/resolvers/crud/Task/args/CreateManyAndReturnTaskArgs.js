"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyInput_1 = require("../../../inputs/TaskCreateManyInput");
let CreateManyAndReturnTaskArgs = class CreateManyAndReturnTaskArgs {
};
exports.CreateManyAndReturnTaskArgs = CreateManyAndReturnTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyInput_1.TaskCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnTaskArgs.prototype, "data", void 0);
exports.CreateManyAndReturnTaskArgs = CreateManyAndReturnTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnTaskArgs);
