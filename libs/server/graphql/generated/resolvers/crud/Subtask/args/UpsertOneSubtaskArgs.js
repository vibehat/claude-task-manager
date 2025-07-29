"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateInput_1 = require("../../../inputs/SubtaskCreateInput");
const SubtaskUpdateInput_1 = require("../../../inputs/SubtaskUpdateInput");
const SubtaskWhereUniqueInput_1 = require("../../../inputs/SubtaskWhereUniqueInput");
let UpsertOneSubtaskArgs = class UpsertOneSubtaskArgs {
};
exports.UpsertOneSubtaskArgs = UpsertOneSubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], UpsertOneSubtaskArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateInput_1.SubtaskCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskCreateInput_1.SubtaskCreateInput)
], UpsertOneSubtaskArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateInput_1.SubtaskUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateInput_1.SubtaskUpdateInput)
], UpsertOneSubtaskArgs.prototype, "update", void 0);
exports.UpsertOneSubtaskArgs = UpsertOneSubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSubtaskArgs);
