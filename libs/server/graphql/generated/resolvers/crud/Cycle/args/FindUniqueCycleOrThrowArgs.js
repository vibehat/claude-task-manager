"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCycleOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleWhereUniqueInput_1 = require("../../../inputs/CycleWhereUniqueInput");
let FindUniqueCycleOrThrowArgs = class FindUniqueCycleOrThrowArgs {
};
exports.FindUniqueCycleOrThrowArgs = FindUniqueCycleOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], FindUniqueCycleOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueCycleOrThrowArgs = FindUniqueCycleOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCycleOrThrowArgs);
