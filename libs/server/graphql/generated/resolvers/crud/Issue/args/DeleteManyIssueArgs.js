"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueWhereInput_1 = require("../../../inputs/IssueWhereInput");
let DeleteManyIssueArgs = class DeleteManyIssueArgs {
};
exports.DeleteManyIssueArgs = DeleteManyIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], DeleteManyIssueArgs.prototype, "where", void 0);
exports.DeleteManyIssueArgs = DeleteManyIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyIssueArgs);
