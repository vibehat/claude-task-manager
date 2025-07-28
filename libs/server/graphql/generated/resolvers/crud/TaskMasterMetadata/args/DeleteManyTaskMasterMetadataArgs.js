"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataWhereInput_1 = require("../../../inputs/TaskMasterMetadataWhereInput");
let DeleteManyTaskMasterMetadataArgs = class DeleteManyTaskMasterMetadataArgs {
};
exports.DeleteManyTaskMasterMetadataArgs = DeleteManyTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput)
], DeleteManyTaskMasterMetadataArgs.prototype, "where", void 0);
exports.DeleteManyTaskMasterMetadataArgs = DeleteManyTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTaskMasterMetadataArgs);
