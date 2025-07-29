"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateWithoutIssuesInput");
const IssuePriorityUpdateWithoutIssuesInput_1 = require("../inputs/IssuePriorityUpdateWithoutIssuesInput");
const IssuePriorityWhereInput_1 = require("../inputs/IssuePriorityWhereInput");
let IssuePriorityUpsertWithoutIssuesInput = class IssuePriorityUpsertWithoutIssuesInput {
};
exports.IssuePriorityUpsertWithoutIssuesInput = IssuePriorityUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateWithoutIssuesInput_1.IssuePriorityUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateWithoutIssuesInput_1.IssuePriorityUpdateWithoutIssuesInput)
], IssuePriorityUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput)
], IssuePriorityUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssuePriorityUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.IssuePriorityUpsertWithoutIssuesInput = IssuePriorityUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityUpsertWithoutIssuesInput", {})
], IssuePriorityUpsertWithoutIssuesInput);
