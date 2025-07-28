"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusUpdateManyMutationInput_1 = require("../../../inputs/IssueStatusUpdateManyMutationInput");
const IssueStatusWhereInput_1 = require("../../../inputs/IssueStatusWhereInput");
let UpdateManyIssueStatusArgs = class UpdateManyIssueStatusArgs {
};
exports.UpdateManyIssueStatusArgs = UpdateManyIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateManyMutationInput_1.IssueStatusUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateManyMutationInput_1.IssueStatusUpdateManyMutationInput)
], UpdateManyIssueStatusArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereInput_1.IssueStatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereInput_1.IssueStatusWhereInput)
], UpdateManyIssueStatusArgs.prototype, "where", void 0);
exports.UpdateManyIssueStatusArgs = UpdateManyIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyIssueStatusArgs);
