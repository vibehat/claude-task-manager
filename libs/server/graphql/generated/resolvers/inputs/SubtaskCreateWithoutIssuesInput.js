"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedOneWithoutSubtasksInput_1 = require("../inputs/TaskCreateNestedOneWithoutSubtasksInput");
let SubtaskCreateWithoutIssuesInput = class SubtaskCreateWithoutIssuesInput {
};
exports.SubtaskCreateWithoutIssuesInput = SubtaskCreateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutIssuesInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateWithoutIssuesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutSubtasksInput_1.TaskCreateNestedOneWithoutSubtasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutSubtasksInput_1.TaskCreateNestedOneWithoutSubtasksInput)
], SubtaskCreateWithoutIssuesInput.prototype, "parentTask", void 0);
exports.SubtaskCreateWithoutIssuesInput = SubtaskCreateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateWithoutIssuesInput", {})
], SubtaskCreateWithoutIssuesInput);
