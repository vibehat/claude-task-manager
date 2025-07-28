"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssueLabelOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelWhereUniqueInput_1 = require("../../../inputs/IssueLabelWhereUniqueInput");
let FindUniqueIssueLabelOrThrowArgs = class FindUniqueIssueLabelOrThrowArgs {
};
exports.FindUniqueIssueLabelOrThrowArgs = FindUniqueIssueLabelOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], FindUniqueIssueLabelOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueIssueLabelOrThrowArgs = FindUniqueIssueLabelOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssueLabelOrThrowArgs);
