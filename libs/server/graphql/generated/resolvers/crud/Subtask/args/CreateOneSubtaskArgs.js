"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateInput_1 = require("../../../inputs/SubtaskCreateInput");
let CreateOneSubtaskArgs = class CreateOneSubtaskArgs {
};
exports.CreateOneSubtaskArgs = CreateOneSubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateInput_1.SubtaskCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskCreateInput_1.SubtaskCreateInput)
], CreateOneSubtaskArgs.prototype, "data", void 0);
exports.CreateOneSubtaskArgs = CreateOneSubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSubtaskArgs);
