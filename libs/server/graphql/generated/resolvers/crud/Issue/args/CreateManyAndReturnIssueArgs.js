"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyInput_1 = require("../../../inputs/IssueCreateManyInput");
let CreateManyAndReturnIssueArgs = class CreateManyAndReturnIssueArgs {
};
exports.CreateManyAndReturnIssueArgs = CreateManyAndReturnIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateManyInput_1.IssueCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnIssueArgs.prototype, "data", void 0);
exports.CreateManyAndReturnIssueArgs = CreateManyAndReturnIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnIssueArgs);
