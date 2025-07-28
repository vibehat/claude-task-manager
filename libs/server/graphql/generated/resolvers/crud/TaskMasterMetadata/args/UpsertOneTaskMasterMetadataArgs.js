"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataCreateInput_1 = require("../../../inputs/TaskMasterMetadataCreateInput");
const TaskMasterMetadataUpdateInput_1 = require("../../../inputs/TaskMasterMetadataUpdateInput");
const TaskMasterMetadataWhereUniqueInput_1 = require("../../../inputs/TaskMasterMetadataWhereUniqueInput");
let UpsertOneTaskMasterMetadataArgs = class UpsertOneTaskMasterMetadataArgs {
};
exports.UpsertOneTaskMasterMetadataArgs = UpsertOneTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput)
], UpsertOneTaskMasterMetadataArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataCreateInput_1.TaskMasterMetadataCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataCreateInput_1.TaskMasterMetadataCreateInput)
], UpsertOneTaskMasterMetadataArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataUpdateInput_1.TaskMasterMetadataUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataUpdateInput_1.TaskMasterMetadataUpdateInput)
], UpsertOneTaskMasterMetadataArgs.prototype, "update", void 0);
exports.UpsertOneTaskMasterMetadataArgs = UpsertOneTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTaskMasterMetadataArgs);
