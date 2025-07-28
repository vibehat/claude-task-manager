"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TaskMasterMetadataWhereInput_1 = require("../inputs/TaskMasterMetadataWhereInput");
let TaskMasterMetadataWhereUniqueInput = class TaskMasterMetadataWhereUniqueInput {
};
exports.TaskMasterMetadataWhereUniqueInput = TaskMasterMetadataWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskMasterMetadataWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskMasterMetadataWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput_1.TaskMasterMetadataWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskMasterMetadataWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskMasterMetadataWhereUniqueInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskMasterMetadataWhereUniqueInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskMasterMetadataWhereUniqueInput.prototype, "description", void 0);
exports.TaskMasterMetadataWhereUniqueInput = TaskMasterMetadataWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataWhereUniqueInput", {})
], TaskMasterMetadataWhereUniqueInput);
