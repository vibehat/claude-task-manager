"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityUpdateWithoutIssuesInput_1 = require("../inputs/IssuePriorityUpdateWithoutIssuesInput");
const IssuePriorityWhereInput_1 = require("../inputs/IssuePriorityWhereInput");
let IssuePriorityUpdateToOneWithWhereWithoutIssuesInput = class IssuePriorityUpdateToOneWithWhereWithoutIssuesInput {
};
exports.IssuePriorityUpdateToOneWithWhereWithoutIssuesInput = IssuePriorityUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssuePriorityUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateWithoutIssuesInput_1.IssuePriorityUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateWithoutIssuesInput_1.IssuePriorityUpdateWithoutIssuesInput)
], IssuePriorityUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.IssuePriorityUpdateToOneWithWhereWithoutIssuesInput = IssuePriorityUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityUpdateToOneWithWhereWithoutIssuesInput", {})
], IssuePriorityUpdateToOneWithWhereWithoutIssuesInput);
