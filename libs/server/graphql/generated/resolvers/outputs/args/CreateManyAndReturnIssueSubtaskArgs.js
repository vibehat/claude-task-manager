"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueSubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskWhereInput_1 = require("../../inputs/SubtaskWhereInput");
let CreateManyAndReturnIssueSubtaskArgs = class CreateManyAndReturnIssueSubtaskArgs {
};
exports.CreateManyAndReturnIssueSubtaskArgs = CreateManyAndReturnIssueSubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], CreateManyAndReturnIssueSubtaskArgs.prototype, "where", void 0);
exports.CreateManyAndReturnIssueSubtaskArgs = CreateManyAndReturnIssueSubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnIssueSubtaskArgs);
