"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateInput_1 = require("../../../inputs/ProjectCreateInput");
let CreateOneProjectArgs = class CreateOneProjectArgs {
};
exports.CreateOneProjectArgs = CreateOneProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateInput_1.ProjectCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateInput_1.ProjectCreateInput)
], CreateOneProjectArgs.prototype, "data", void 0);
exports.CreateOneProjectArgs = CreateOneProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProjectArgs);
