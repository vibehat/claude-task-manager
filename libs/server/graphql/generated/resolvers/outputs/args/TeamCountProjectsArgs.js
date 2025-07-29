"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCountProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectWhereInput_1 = require("../../inputs/TeamProjectWhereInput");
let TeamCountProjectsArgs = class TeamCountProjectsArgs {
};
exports.TeamCountProjectsArgs = TeamCountProjectsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], TeamCountProjectsArgs.prototype, "where", void 0);
exports.TeamCountProjectsArgs = TeamCountProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TeamCountProjectsArgs);
