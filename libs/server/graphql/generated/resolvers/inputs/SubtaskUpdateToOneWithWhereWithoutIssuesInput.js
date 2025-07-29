"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskUpdateWithoutIssuesInput_1 = require("../inputs/SubtaskUpdateWithoutIssuesInput");
const SubtaskWhereInput_1 = require("../inputs/SubtaskWhereInput");
let SubtaskUpdateToOneWithWhereWithoutIssuesInput = class SubtaskUpdateToOneWithWhereWithoutIssuesInput {
};
exports.SubtaskUpdateToOneWithWhereWithoutIssuesInput = SubtaskUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateWithoutIssuesInput_1.SubtaskUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateWithoutIssuesInput_1.SubtaskUpdateWithoutIssuesInput)
], SubtaskUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.SubtaskUpdateToOneWithWhereWithoutIssuesInput = SubtaskUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpdateToOneWithWhereWithoutIssuesInput", {})
], SubtaskUpdateToOneWithWhereWithoutIssuesInput);
