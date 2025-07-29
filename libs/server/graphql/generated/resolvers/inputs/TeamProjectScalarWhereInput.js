"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let TeamProjectScalarWhereInput = class TeamProjectScalarWhereInput {
};
exports.TeamProjectScalarWhereInput = TeamProjectScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectScalarWhereInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamProjectScalarWhereInput.prototype, "projectId", void 0);
exports.TeamProjectScalarWhereInput = TeamProjectScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectScalarWhereInput", {})
], TeamProjectScalarWhereInput);
