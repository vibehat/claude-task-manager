"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyInput_1 = require("../../../inputs/UserCreateManyInput");
let CreateManyAndReturnUserArgs = class CreateManyAndReturnUserArgs {
};
exports.CreateManyAndReturnUserArgs = CreateManyAndReturnUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateManyInput_1.UserCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnUserArgs.prototype, "data", void 0);
exports.CreateManyAndReturnUserArgs = CreateManyAndReturnUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnUserArgs);
