"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateManyMutationInput_1 = require("../../../inputs/IssueUpdateManyMutationInput");
const IssueWhereInput_1 = require("../../../inputs/IssueWhereInput");
let UpdateManyIssueArgs = class UpdateManyIssueArgs {
};
exports.UpdateManyIssueArgs = UpdateManyIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateManyMutationInput_1.IssueUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateManyMutationInput_1.IssueUpdateManyMutationInput)
], UpdateManyIssueArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], UpdateManyIssueArgs.prototype, "where", void 0);
exports.UpdateManyIssueArgs = UpdateManyIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyIssueArgs);
