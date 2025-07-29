"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCountTeamsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectWhereInput_1 = require("../../inputs/TeamProjectWhereInput");
let ProjectCountTeamsArgs = class ProjectCountTeamsArgs {
};
exports.ProjectCountTeamsArgs = ProjectCountTeamsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], ProjectCountTeamsArgs.prototype, "where", void 0);
exports.ProjectCountTeamsArgs = ProjectCountTeamsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProjectCountTeamsArgs);
