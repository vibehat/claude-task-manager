"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutAssigneeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutAssigneeInput_1 = require("../inputs/IssueUpdateWithoutAssigneeInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutAssigneeInput = class IssueUpdateWithWhereUniqueWithoutAssigneeInput {
};
exports.IssueUpdateWithWhereUniqueWithoutAssigneeInput = IssueUpdateWithWhereUniqueWithoutAssigneeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutAssigneeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutAssigneeInput_1.IssueUpdateWithoutAssigneeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutAssigneeInput_1.IssueUpdateWithoutAssigneeInput)
], IssueUpdateWithWhereUniqueWithoutAssigneeInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutAssigneeInput = IssueUpdateWithWhereUniqueWithoutAssigneeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutAssigneeInput", {})
], IssueUpdateWithWhereUniqueWithoutAssigneeInput);
