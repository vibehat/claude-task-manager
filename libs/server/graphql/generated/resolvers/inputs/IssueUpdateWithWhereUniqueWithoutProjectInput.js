"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutProjectInput_1 = require("../inputs/IssueUpdateWithoutProjectInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutProjectInput = class IssueUpdateWithWhereUniqueWithoutProjectInput {
};
exports.IssueUpdateWithWhereUniqueWithoutProjectInput = IssueUpdateWithWhereUniqueWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutProjectInput_1.IssueUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutProjectInput_1.IssueUpdateWithoutProjectInput)
], IssueUpdateWithWhereUniqueWithoutProjectInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutProjectInput = IssueUpdateWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutProjectInput", {})
], IssueUpdateWithWhereUniqueWithoutProjectInput);
