"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLabelOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelWhereUniqueInput_1 = require("../../../inputs/LabelWhereUniqueInput");
let FindUniqueLabelOrThrowArgs = class FindUniqueLabelOrThrowArgs {
};
exports.FindUniqueLabelOrThrowArgs = FindUniqueLabelOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], FindUniqueLabelOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueLabelOrThrowArgs = FindUniqueLabelOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLabelOrThrowArgs);
