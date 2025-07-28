"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateWithoutIssuesInput_1 = require("../inputs/SubtaskCreateWithoutIssuesInput");
const SubtaskUpdateWithoutIssuesInput_1 = require("../inputs/SubtaskUpdateWithoutIssuesInput");
const SubtaskWhereInput_1 = require("../inputs/SubtaskWhereInput");
let SubtaskUpsertWithoutIssuesInput = class SubtaskUpsertWithoutIssuesInput {
};
exports.SubtaskUpsertWithoutIssuesInput = SubtaskUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateWithoutIssuesInput_1.SubtaskUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateWithoutIssuesInput_1.SubtaskUpdateWithoutIssuesInput)
], SubtaskUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput)
], SubtaskUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.SubtaskUpsertWithoutIssuesInput = SubtaskUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpsertWithoutIssuesInput", {})
], SubtaskUpsertWithoutIssuesInput);
