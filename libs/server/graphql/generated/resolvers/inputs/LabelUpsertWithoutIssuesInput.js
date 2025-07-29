"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateWithoutIssuesInput_1 = require("../inputs/LabelCreateWithoutIssuesInput");
const LabelUpdateWithoutIssuesInput_1 = require("../inputs/LabelUpdateWithoutIssuesInput");
const LabelWhereInput_1 = require("../inputs/LabelWhereInput");
let LabelUpsertWithoutIssuesInput = class LabelUpsertWithoutIssuesInput {
};
exports.LabelUpsertWithoutIssuesInput = LabelUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateWithoutIssuesInput_1.LabelUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelUpdateWithoutIssuesInput_1.LabelUpdateWithoutIssuesInput)
], LabelUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput)
], LabelUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], LabelUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.LabelUpsertWithoutIssuesInput = LabelUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelUpsertWithoutIssuesInput", {})
], LabelUpsertWithoutIssuesInput);
