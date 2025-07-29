"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataUpdateInput_1 = require("../../../inputs/TaskMasterMetadataUpdateInput");
const TaskMasterMetadataWhereUniqueInput_1 = require("../../../inputs/TaskMasterMetadataWhereUniqueInput");
let UpdateOneTaskMasterMetadataArgs = class UpdateOneTaskMasterMetadataArgs {
};
exports.UpdateOneTaskMasterMetadataArgs = UpdateOneTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataUpdateInput_1.TaskMasterMetadataUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataUpdateInput_1.TaskMasterMetadataUpdateInput)
], UpdateOneTaskMasterMetadataArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput)
], UpdateOneTaskMasterMetadataArgs.prototype, "where", void 0);
exports.UpdateOneTaskMasterMetadataArgs = UpdateOneTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTaskMasterMetadataArgs);
