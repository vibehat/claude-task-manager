"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIssueStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCreateManyInput_1 = require("../../../inputs/IssueStatusCreateManyInput");
let CreateManyIssueStatusArgs = class CreateManyIssueStatusArgs {
};
exports.CreateManyIssueStatusArgs = CreateManyIssueStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueStatusCreateManyInput_1.IssueStatusCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyIssueStatusArgs.prototype, "data", void 0);
exports.CreateManyIssueStatusArgs = CreateManyIssueStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyIssueStatusArgs);
