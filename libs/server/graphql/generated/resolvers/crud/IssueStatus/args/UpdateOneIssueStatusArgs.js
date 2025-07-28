"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusUpdateInput_1 = require("../../../inputs/IssueStatusUpdateInput");
const IssueStatusWhereUniqueInput_1 = require("../../../inputs/IssueStatusWhereUniqueInput");
let UpdateOneIssueStatusArgs = class UpdateOneIssueStatusArgs {
};
exports.UpdateOneIssueStatusArgs = UpdateOneIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusUpdateInput_1.IssueStatusUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusUpdateInput_1.IssueStatusUpdateInput)
], UpdateOneIssueStatusArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusWhereUniqueInput_1.IssueStatusWhereUniqueInput)
], UpdateOneIssueStatusArgs.prototype, "where", void 0);
exports.UpdateOneIssueStatusArgs = UpdateOneIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneIssueStatusArgs);
