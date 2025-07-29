"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateInput_1 = require("../../../inputs/IssueStatusCreateInput");
let CreateOneIssueStatusArgs = class CreateOneIssueStatusArgs {
};
exports.CreateOneIssueStatusArgs = CreateOneIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCreateInput_1.IssueStatusCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueStatusCreateInput_1.IssueStatusCreateInput)
], CreateOneIssueStatusArgs.prototype, "data", void 0);
exports.CreateOneIssueStatusArgs = CreateOneIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneIssueStatusArgs);
