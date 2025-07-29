"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountLedProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectWhereInput_1 = require("../../inputs/ProjectWhereInput");
let UserCountLedProjectsArgs = class UserCountLedProjectsArgs {
};
exports.UserCountLedProjectsArgs = UserCountLedProjectsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], UserCountLedProjectsArgs.prototype, "where", void 0);
exports.UserCountLedProjectsArgs = UserCountLedProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountLedProjectsArgs);
