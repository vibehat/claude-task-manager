"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutIssuePriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateWithoutIssuePriorityInput");
const IssueUpdateWithoutIssuePriorityInput_1 = require("../inputs/IssueUpdateWithoutIssuePriorityInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutIssuePriorityInput = class IssueUpsertWithWhereUniqueWithoutIssuePriorityInput {
};
exports.IssueUpsertWithWhereUniqueWithoutIssuePriorityInput = IssueUpsertWithWhereUniqueWithoutIssuePriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutIssuePriorityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutIssuePriorityInput_1.IssueUpdateWithoutIssuePriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutIssuePriorityInput_1.IssueUpdateWithoutIssuePriorityInput)
], IssueUpsertWithWhereUniqueWithoutIssuePriorityInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutIssuePriorityInput_1.IssueCreateWithoutIssuePriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutIssuePriorityInput_1.IssueCreateWithoutIssuePriorityInput)
], IssueUpsertWithWhereUniqueWithoutIssuePriorityInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutIssuePriorityInput = IssueUpsertWithWhereUniqueWithoutIssuePriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutIssuePriorityInput", {})
], IssueUpsertWithWhereUniqueWithoutIssuePriorityInput);
