"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskWhereUniqueInput_1 = require("../../../inputs/SubtaskWhereUniqueInput");
let DeleteOneSubtaskArgs = class DeleteOneSubtaskArgs {
};
exports.DeleteOneSubtaskArgs = DeleteOneSubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], DeleteOneSubtaskArgs.prototype, "where", void 0);
exports.DeleteOneSubtaskArgs = DeleteOneSubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSubtaskArgs);
