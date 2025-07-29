"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelUpdateWithoutIssuesInput_1 = require("../inputs/LabelUpdateWithoutIssuesInput");
const LabelWhereInput_1 = require("../inputs/LabelWhereInput");
let LabelUpdateToOneWithWhereWithoutIssuesInput = class LabelUpdateToOneWithWhereWithoutIssuesInput {
};
exports.LabelUpdateToOneWithWhereWithoutIssuesInput = LabelUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], LabelUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateWithoutIssuesInput_1.LabelUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelUpdateWithoutIssuesInput_1.LabelUpdateWithoutIssuesInput)
], LabelUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.LabelUpdateToOneWithWhereWithoutIssuesInput = LabelUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelUpdateToOneWithWhereWithoutIssuesInput", {})
], LabelUpdateToOneWithWhereWithoutIssuesInput);
