"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithWhereWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyMutationInput_1 = require("../inputs/IssueUpdateManyMutationInput");
let IssueUpdateManyWithWhereWithoutTaskInput = class IssueUpdateManyWithWhereWithoutTaskInput {
};
exports.IssueUpdateManyWithWhereWithoutTaskInput = IssueUpdateManyWithWhereWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueScalarWhereInput_1.IssueScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueScalarWhereInput_1.IssueScalarWhereInput)
], IssueUpdateManyWithWhereWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateManyMutationInput_1.IssueUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateManyMutationInput_1.IssueUpdateManyMutationInput)
], IssueUpdateManyWithWhereWithoutTaskInput.prototype, "data", void 0);
exports.IssueUpdateManyWithWhereWithoutTaskInput = IssueUpdateManyWithWhereWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithWhereWithoutTaskInput", {})
], IssueUpdateManyWithWhereWithoutTaskInput);
