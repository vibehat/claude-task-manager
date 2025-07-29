"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataOrderByWithRelationInput_1 = require("../../../inputs/TaskMasterMetadataOrderByWithRelationInput");
const TaskMasterMetadataWhereInput_1 = require("../../../inputs/TaskMasterMetadataWhereInput");
const TaskMasterMetadataWhereUniqueInput_1 = require("../../../inputs/TaskMasterMetadataWhereUniqueInput");
const TaskMasterMetadataScalarFieldEnum_1 = require("../../../../enums/TaskMasterMetadataScalarFieldEnum");
let FindManyTaskMasterMetadataArgs = class FindManyTaskMasterMetadataArgs {
};
exports.FindManyTaskMasterMetadataArgs = FindManyTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput)
], FindManyTaskMasterMetadataArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataOrderByWithRelationInput_1.TaskMasterMetadataOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTaskMasterMetadataArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataWhereUniqueInput_1.TaskMasterMetadataWhereUniqueInput)
], FindManyTaskMasterMetadataArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTaskMasterMetadataArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTaskMasterMetadataArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataScalarFieldEnum_1.TaskMasterMetadataScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTaskMasterMetadataArgs.prototype, "distinct", void 0);
exports.FindManyTaskMasterMetadataArgs = FindManyTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTaskMasterMetadataArgs);
