"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutTaskInput_1 = require("../inputs/IssueUpdateWithoutTaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutTaskInput = class IssueUpdateWithWhereUniqueWithoutTaskInput {
};
exports.IssueUpdateWithWhereUniqueWithoutTaskInput = IssueUpdateWithWhereUniqueWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutTaskInput_1.IssueUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutTaskInput_1.IssueUpdateWithoutTaskInput)
], IssueUpdateWithWhereUniqueWithoutTaskInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutTaskInput = IssueUpdateWithWhereUniqueWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutTaskInput", {})
], IssueUpdateWithWhereUniqueWithoutTaskInput);
