"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectWhereInput_1 = require("../../../inputs/ProjectWhereInput");
let IssueProjectArgs = class IssueProjectArgs {
};
exports.IssueProjectArgs = IssueProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], IssueProjectArgs.prototype, "where", void 0);
exports.IssueProjectArgs = IssueProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], IssueProjectArgs);
