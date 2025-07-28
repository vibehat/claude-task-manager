"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataOrderByWithRelationInput_1 = require("../../../inputs/TaskMasterMetadataOrderByWithRelationInput");
const TaskMasterMetadataWhereInput_1 = require("../../../inputs/TaskMasterMetadataWhereInput");
const TaskMasterMetadataWhereUniqueInput_1 = require("../../../inputs/TaskMasterMetadataWhereUniqueInput");
let AggregateTaskMasterMetadataArgs = class AggregateTaskMasterMetadataArgs {
};
exports.AggregateTaskMasterMetadataArgs = AggregateTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput)
], AggregateTaskMasterMetadataArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataOrderByWithRelationInput_1.TaskMasterMetadataOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTaskMasterMetadataArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput)
], AggregateTaskMasterMetadataArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTaskMasterMetadataArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTaskMasterMetadataArgs.prototype, "skip", void 0);
exports.AggregateTaskMasterMetadataArgs = AggregateTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTaskMasterMetadataArgs);
