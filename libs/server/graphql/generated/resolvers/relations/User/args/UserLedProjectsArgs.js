"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLedProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectOrderByWithRelationInput_1 = require("../../../inputs/ProjectOrderByWithRelationInput");
const ProjectWhereInput_1 = require("../../../inputs/ProjectWhereInput");
const ProjectWhereUniqueInput_1 = require("../../../inputs/ProjectWhereUniqueInput");
const ProjectScalarFieldEnum_1 = require("../../../../enums/ProjectScalarFieldEnum");
let UserLedProjectsArgs = class UserLedProjectsArgs {
};
exports.UserLedProjectsArgs = UserLedProjectsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], UserLedProjectsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectOrderByWithRelationInput_1.ProjectOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserLedProjectsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], UserLedProjectsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserLedProjectsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserLedProjectsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectScalarFieldEnum_1.ProjectScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserLedProjectsArgs.prototype, "distinct", void 0);
exports.UserLedProjectsArgs = UserLedProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserLedProjectsArgs);
