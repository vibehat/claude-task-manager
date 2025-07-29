"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutAssigneeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutAssigneeInput_1 = require("../inputs/IssueCreateWithoutAssigneeInput");
const IssueUpdateWithoutAssigneeInput_1 = require("../inputs/IssueUpdateWithoutAssigneeInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutAssigneeInput = class IssueUpsertWithWhereUniqueWithoutAssigneeInput {
};
exports.IssueUpsertWithWhereUniqueWithoutAssigneeInput = IssueUpsertWithWhereUniqueWithoutAssigneeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutAssigneeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutAssigneeInput_1.IssueUpdateWithoutAssigneeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutAssigneeInput_1.IssueUpdateWithoutAssigneeInput)
], IssueUpsertWithWhereUniqueWithoutAssigneeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutAssigneeInput_1.IssueCreateWithoutAssigneeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutAssigneeInput_1.IssueCreateWithoutAssigneeInput)
], IssueUpsertWithWhereUniqueWithoutAssigneeInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutAssigneeInput = IssueUpsertWithWhereUniqueWithoutAssigneeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutAssigneeInput", {})
], IssueUpsertWithWhereUniqueWithoutAssigneeInput);
