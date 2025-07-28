"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithoutLabelsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutLabelsInput_1 = require("../inputs/IssueCreateWithoutLabelsInput");
const IssueUpdateWithoutLabelsInput_1 = require("../inputs/IssueUpdateWithoutLabelsInput");
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
let IssueUpsertWithoutLabelsInput = class IssueUpsertWithoutLabelsInput {
};
exports.IssueUpsertWithoutLabelsInput = IssueUpsertWithoutLabelsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutLabelsInput_1.IssueUpdateWithoutLabelsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutLabelsInput_1.IssueUpdateWithoutLabelsInput)
], IssueUpsertWithoutLabelsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput)
], IssueUpsertWithoutLabelsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueUpsertWithoutLabelsInput.prototype, "where", void 0);
exports.IssueUpsertWithoutLabelsInput = IssueUpsertWithoutLabelsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithoutLabelsInput", {})
], IssueUpsertWithoutLabelsInput);
