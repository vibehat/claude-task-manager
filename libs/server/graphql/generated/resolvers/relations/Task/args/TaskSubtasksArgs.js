"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSubtasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskOrderByWithRelationInput_1 = require("../../../inputs/SubtaskOrderByWithRelationInput");
const SubtaskWhereInput_1 = require("../../../inputs/SubtaskWhereInput");
const SubtaskWhereUniqueInput_1 = require("../../../inputs/SubtaskWhereUniqueInput");
const SubtaskScalarFieldEnum_1 = require("../../../../enums/SubtaskScalarFieldEnum");
let TaskSubtasksArgs = class TaskSubtasksArgs {
};
exports.TaskSubtasksArgs = TaskSubtasksArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], TaskSubtasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskOrderByWithRelationInput_1.SubtaskOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskSubtasksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], TaskSubtasksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskSubtasksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskSubtasksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskScalarFieldEnum_1.SubtaskScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskSubtasksArgs.prototype, "distinct", void 0);
exports.TaskSubtasksArgs = TaskSubtasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TaskSubtasksArgs);
