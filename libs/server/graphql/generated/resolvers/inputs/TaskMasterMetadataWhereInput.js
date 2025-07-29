"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TaskMasterMetadataWhereInput = class TaskMasterMetadataWhereInput {
};
exports.TaskMasterMetadataWhereInput = TaskMasterMetadataWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskMasterMetadataWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskMasterMetadataWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskMasterMetadataWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskMasterMetadataWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskMasterMetadataWhereInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskMasterMetadataWhereInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskMasterMetadataWhereInput.prototype, "description", void 0);
exports.TaskMasterMetadataWhereInput = TaskMasterMetadataWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataWhereInput", {})
], TaskMasterMetadataWhereInput);
