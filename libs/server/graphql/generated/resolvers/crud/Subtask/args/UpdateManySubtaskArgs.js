"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskUpdateManyMutationInput_1 = require("../../../inputs/SubtaskUpdateManyMutationInput");
const SubtaskWhereInput_1 = require("../../../inputs/SubtaskWhereInput");
let UpdateManySubtaskArgs = class UpdateManySubtaskArgs {
};
exports.UpdateManySubtaskArgs = UpdateManySubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateManyMutationInput_1.SubtaskUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateManyMutationInput_1.SubtaskUpdateManyMutationInput)
], UpdateManySubtaskArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], UpdateManySubtaskArgs.prototype, "where", void 0);
exports.UpdateManySubtaskArgs = UpdateManySubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySubtaskArgs);
