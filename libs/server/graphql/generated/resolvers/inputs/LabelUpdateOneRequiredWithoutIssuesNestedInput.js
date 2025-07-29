"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelUpdateOneRequiredWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateOrConnectWithoutIssuesInput_1 = require("../inputs/LabelCreateOrConnectWithoutIssuesInput");
const LabelCreateWithoutIssuesInput_1 = require("../inputs/LabelCreateWithoutIssuesInput");
const LabelUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/LabelUpdateToOneWithWhereWithoutIssuesInput");
const LabelUpsertWithoutIssuesInput_1 = require("../inputs/LabelUpsertWithoutIssuesInput");
const LabelWhereUniqueInput_1 = require("../inputs/LabelWhereUniqueInput");
let LabelUpdateOneRequiredWithoutIssuesNestedInput = class LabelUpdateOneRequiredWithoutIssuesNestedInput {
};
exports.LabelUpdateOneRequiredWithoutIssuesNestedInput = LabelUpdateOneRequiredWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput)
], LabelUpdateOneRequiredWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateOrConnectWithoutIssuesInput_1.LabelCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCreateOrConnectWithoutIssuesInput_1.LabelCreateOrConnectWithoutIssuesInput)
], LabelUpdateOneRequiredWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpsertWithoutIssuesInput_1.LabelUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelUpsertWithoutIssuesInput_1.LabelUpsertWithoutIssuesInput)
], LabelUpdateOneRequiredWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], LabelUpdateOneRequiredWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateToOneWithWhereWithoutIssuesInput_1.LabelUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelUpdateToOneWithWhereWithoutIssuesInput_1.LabelUpdateToOneWithWhereWithoutIssuesInput)
], LabelUpdateOneRequiredWithoutIssuesNestedInput.prototype, "update", void 0);
exports.LabelUpdateOneRequiredWithoutIssuesNestedInput = LabelUpdateOneRequiredWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelUpdateOneRequiredWithoutIssuesNestedInput", {})
], LabelUpdateOneRequiredWithoutIssuesNestedInput);
