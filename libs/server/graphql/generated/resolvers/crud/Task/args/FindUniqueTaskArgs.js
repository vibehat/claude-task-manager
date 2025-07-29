"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
let FindUniqueTaskArgs = class FindUniqueTaskArgs {
};
exports.FindUniqueTaskArgs = FindUniqueTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], FindUniqueTaskArgs.prototype, "where", void 0);
exports.FindUniqueTaskArgs = FindUniqueTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaskArgs);
