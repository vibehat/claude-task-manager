"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskUpdateInput_1 = require("../../../inputs/SubtaskUpdateInput");
const SubtaskWhereUniqueInput_1 = require("../../../inputs/SubtaskWhereUniqueInput");
let UpdateOneSubtaskArgs = class UpdateOneSubtaskArgs {
};
exports.UpdateOneSubtaskArgs = UpdateOneSubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateInput_1.SubtaskUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateInput_1.SubtaskUpdateInput)
], UpdateOneSubtaskArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], UpdateOneSubtaskArgs.prototype, "where", void 0);
exports.UpdateOneSubtaskArgs = UpdateOneSubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSubtaskArgs);
