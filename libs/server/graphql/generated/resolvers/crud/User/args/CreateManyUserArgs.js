"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyInput_1 = require("../../../inputs/UserCreateManyInput");
let CreateManyUserArgs = class CreateManyUserArgs {
};
exports.CreateManyUserArgs = CreateManyUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateManyInput_1.UserCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUserArgs.prototype, "data", void 0);
exports.CreateManyUserArgs = CreateManyUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUserArgs);
