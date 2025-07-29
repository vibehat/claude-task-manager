"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskMasterMetadataOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataWhereUniqueInput_1 = require("../../../inputs/TaskMasterMetadataWhereUniqueInput");
let FindUniqueTaskMasterMetadataOrThrowArgs = class FindUniqueTaskMasterMetadataOrThrowArgs {
};
exports.FindUniqueTaskMasterMetadataOrThrowArgs = FindUniqueTaskMasterMetadataOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput)
], FindUniqueTaskMasterMetadataOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueTaskMasterMetadataOrThrowArgs = FindUniqueTaskMasterMetadataOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaskMasterMetadataOrThrowArgs);
