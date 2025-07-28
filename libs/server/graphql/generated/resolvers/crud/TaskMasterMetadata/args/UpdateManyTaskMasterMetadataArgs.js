"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataUpdateManyMutationInput_1 = require("../../../inputs/TaskMasterMetadataUpdateManyMutationInput");
const TaskMasterMetadataWhereInput_1 = require("../../../inputs/TaskMasterMetadataWhereInput");
let UpdateManyTaskMasterMetadataArgs = class UpdateManyTaskMasterMetadataArgs {
};
exports.UpdateManyTaskMasterMetadataArgs = UpdateManyTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataUpdateManyMutationInput_1.TaskMasterMetadataUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataUpdateManyMutationInput_1.TaskMasterMetadataUpdateManyMutationInput)
], UpdateManyTaskMasterMetadataArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput)
], UpdateManyTaskMasterMetadataArgs.prototype, "where", void 0);
exports.UpdateManyTaskMasterMetadataArgs = UpdateManyTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTaskMasterMetadataArgs);
