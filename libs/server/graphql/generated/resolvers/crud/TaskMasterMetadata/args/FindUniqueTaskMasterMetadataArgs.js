"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataWhereUniqueInput_1 = require("../../../inputs/TaskMasterMetadataWhereUniqueInput");
let FindUniqueTaskMasterMetadataArgs = class FindUniqueTaskMasterMetadataArgs {
};
exports.FindUniqueTaskMasterMetadataArgs = FindUniqueTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput)
], FindUniqueTaskMasterMetadataArgs.prototype, "where", void 0);
exports.FindUniqueTaskMasterMetadataArgs = FindUniqueTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaskMasterMetadataArgs);
