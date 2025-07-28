"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateInput_1 = require("../../../inputs/IssueUpdateInput");
const IssueWhereUniqueInput_1 = require("../../../inputs/IssueWhereUniqueInput");
let UpdateOneIssueArgs = class UpdateOneIssueArgs {
};
exports.UpdateOneIssueArgs = UpdateOneIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateInput_1.IssueUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateInput_1.IssueUpdateInput)
], UpdateOneIssueArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], UpdateOneIssueArgs.prototype, "where", void 0);
exports.UpdateOneIssueArgs = UpdateOneIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneIssueArgs);
