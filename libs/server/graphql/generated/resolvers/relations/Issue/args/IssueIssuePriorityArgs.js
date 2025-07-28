"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereInput_1 = require("../../../inputs/IssuePriorityWhereInput");
let IssueIssuePriorityArgs = class IssueIssuePriorityArgs {
};
exports.IssueIssuePriorityArgs = IssueIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], IssueIssuePriorityArgs.prototype, "where", void 0);
exports.IssueIssuePriorityArgs = IssueIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], IssueIssuePriorityArgs);
