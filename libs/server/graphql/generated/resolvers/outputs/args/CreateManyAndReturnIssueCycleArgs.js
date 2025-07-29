"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleWhereInput_1 = require("../../inputs/CycleWhereInput");
let CreateManyAndReturnIssueCycleArgs = class CreateManyAndReturnIssueCycleArgs {
};
exports.CreateManyAndReturnIssueCycleArgs = CreateManyAndReturnIssueCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CreateManyAndReturnIssueCycleArgs.prototype, "where", void 0);
exports.CreateManyAndReturnIssueCycleArgs = CreateManyAndReturnIssueCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnIssueCycleArgs);
