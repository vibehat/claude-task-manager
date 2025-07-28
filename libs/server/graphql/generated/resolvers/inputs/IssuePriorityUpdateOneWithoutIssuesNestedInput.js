"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityUpdateOneWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateOrConnectWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateOrConnectWithoutIssuesInput");
const IssuePriorityCreateWithoutIssuesInput_1 = require("../inputs/IssuePriorityCreateWithoutIssuesInput");
const IssuePriorityUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/IssuePriorityUpdateToOneWithWhereWithoutIssuesInput");
const IssuePriorityUpsertWithoutIssuesInput_1 = require("../inputs/IssuePriorityUpsertWithoutIssuesInput");
const IssuePriorityWhereInput_1 = require("../inputs/IssuePriorityWhereInput");
const IssuePriorityWhereUniqueInput_1 = require("../inputs/IssuePriorityWhereUniqueInput");
let IssuePriorityUpdateOneWithoutIssuesNestedInput = class IssuePriorityUpdateOneWithoutIssuesNestedInput {
};
exports.IssuePriorityUpdateOneWithoutIssuesNestedInput = IssuePriorityUpdateOneWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateWithoutIssuesInput_1.IssuePriorityCreateWithoutIssuesInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateOrConnectWithoutIssuesInput_1.IssuePriorityCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateOrConnectWithoutIssuesInput_1.IssuePriorityCreateOrConnectWithoutIssuesInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpsertWithoutIssuesInput_1.IssuePriorityUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpsertWithoutIssuesInput_1.IssuePriorityUpsertWithoutIssuesInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateToOneWithWhereWithoutIssuesInput_1.IssuePriorityUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateToOneWithWhereWithoutIssuesInput_1.IssuePriorityUpdateToOneWithWhereWithoutIssuesInput)
], IssuePriorityUpdateOneWithoutIssuesNestedInput.prototype, "update", void 0);
exports.IssuePriorityUpdateOneWithoutIssuesNestedInput = IssuePriorityUpdateOneWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityUpdateOneWithoutIssuesNestedInput", {})
], IssuePriorityUpdateOneWithoutIssuesNestedInput);
