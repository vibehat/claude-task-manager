"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateManyInput_1 = require("../../../inputs/ProjectCreateManyInput");
let CreateManyProjectArgs = class CreateManyProjectArgs {
};
exports.CreateManyProjectArgs = CreateManyProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateManyInput_1.ProjectCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProjectArgs.prototype, "data", void 0);
exports.CreateManyProjectArgs = CreateManyProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProjectArgs);
