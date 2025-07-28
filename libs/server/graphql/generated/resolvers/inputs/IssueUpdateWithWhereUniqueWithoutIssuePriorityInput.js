"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutIssuePriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutIssuePriorityInput_1 = require("../inputs/IssueUpdateWithoutIssuePriorityInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutIssuePriorityInput = class IssueUpdateWithWhereUniqueWithoutIssuePriorityInput {
};
exports.IssueUpdateWithWhereUniqueWithoutIssuePriorityInput = IssueUpdateWithWhereUniqueWithoutIssuePriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutIssuePriorityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutIssuePriorityInput_1.IssueUpdateWithoutIssuePriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutIssuePriorityInput_1.IssueUpdateWithoutIssuePriorityInput)
], IssueUpdateWithWhereUniqueWithoutIssuePriorityInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutIssuePriorityInput = IssueUpdateWithWhereUniqueWithoutIssuePriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutIssuePriorityInput", {})
], IssueUpdateWithWhereUniqueWithoutIssuePriorityInput);
