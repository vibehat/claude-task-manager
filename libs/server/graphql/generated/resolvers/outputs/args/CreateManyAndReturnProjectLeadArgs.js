"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnProjectLeadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereInput_1 = require("../../inputs/UserWhereInput");
let CreateManyAndReturnProjectLeadArgs = class CreateManyAndReturnProjectLeadArgs {
};
exports.CreateManyAndReturnProjectLeadArgs = CreateManyAndReturnProjectLeadArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], CreateManyAndReturnProjectLeadArgs.prototype, "where", void 0);
exports.CreateManyAndReturnProjectLeadArgs = CreateManyAndReturnProjectLeadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnProjectLeadArgs);
