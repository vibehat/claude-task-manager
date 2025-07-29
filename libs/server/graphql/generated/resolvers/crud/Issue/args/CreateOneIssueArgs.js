"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIssueArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateInput_1 = require("../../../inputs/IssueCreateInput");
let CreateOneIssueArgs = class CreateOneIssueArgs {
};
exports.CreateOneIssueArgs = CreateOneIssueArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateInput_1.IssueCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateInput_1.IssueCreateInput)
], CreateOneIssueArgs.prototype, "data", void 0);
exports.CreateOneIssueArgs = CreateOneIssueArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneIssueArgs);
