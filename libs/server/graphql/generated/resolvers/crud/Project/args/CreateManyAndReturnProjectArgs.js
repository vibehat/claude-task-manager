"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateManyInput_1 = require("../../../inputs/ProjectCreateManyInput");
let CreateManyAndReturnProjectArgs = class CreateManyAndReturnProjectArgs {
};
exports.CreateManyAndReturnProjectArgs = CreateManyAndReturnProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateManyInput_1.ProjectCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnProjectArgs.prototype, "data", void 0);
exports.CreateManyAndReturnProjectArgs = CreateManyAndReturnProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnProjectArgs);
