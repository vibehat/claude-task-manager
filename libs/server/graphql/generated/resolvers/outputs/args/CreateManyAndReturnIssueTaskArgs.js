"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereInput_1 = require("../../inputs/TaskWhereInput");
let CreateManyAndReturnIssueTaskArgs = class CreateManyAndReturnIssueTaskArgs {
};
exports.CreateManyAndReturnIssueTaskArgs = CreateManyAndReturnIssueTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], CreateManyAndReturnIssueTaskArgs.prototype, "where", void 0);
exports.CreateManyAndReturnIssueTaskArgs = CreateManyAndReturnIssueTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnIssueTaskArgs);
