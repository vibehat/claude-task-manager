"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereInput_1 = require("../../inputs/IssuePriorityWhereInput");
let CreateManyAndReturnIssueIssuePriorityArgs = class CreateManyAndReturnIssueIssuePriorityArgs {
};
exports.CreateManyAndReturnIssueIssuePriorityArgs = CreateManyAndReturnIssueIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], CreateManyAndReturnIssueIssuePriorityArgs.prototype, "where", void 0);
exports.CreateManyAndReturnIssueIssuePriorityArgs = CreateManyAndReturnIssueIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnIssueIssuePriorityArgs);
