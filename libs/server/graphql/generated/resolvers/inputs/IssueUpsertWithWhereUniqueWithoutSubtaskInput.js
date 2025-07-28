"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutSubtaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutSubtaskInput_1 = require("../inputs/IssueCreateWithoutSubtaskInput");
const IssueUpdateWithoutSubtaskInput_1 = require("../inputs/IssueUpdateWithoutSubtaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutSubtaskInput = class IssueUpsertWithWhereUniqueWithoutSubtaskInput {
};
exports.IssueUpsertWithWhereUniqueWithoutSubtaskInput = IssueUpsertWithWhereUniqueWithoutSubtaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutSubtaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutSubtaskInput_1.IssueUpdateWithoutSubtaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutSubtaskInput_1.IssueUpdateWithoutSubtaskInput)
], IssueUpsertWithWhereUniqueWithoutSubtaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutSubtaskInput_1.IssueCreateWithoutSubtaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutSubtaskInput_1.IssueCreateWithoutSubtaskInput)
], IssueUpsertWithWhereUniqueWithoutSubtaskInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutSubtaskInput = IssueUpsertWithWhereUniqueWithoutSubtaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutSubtaskInput", {})
], IssueUpsertWithWhereUniqueWithoutSubtaskInput);
