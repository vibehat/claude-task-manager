"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSubtaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateManyInput_1 = require("../../../inputs/SubtaskCreateManyInput");
let CreateManyAndReturnSubtaskArgs = class CreateManyAndReturnSubtaskArgs {
};
exports.CreateManyAndReturnSubtaskArgs = CreateManyAndReturnSubtaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskCreateManyInput_1.SubtaskCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnSubtaskArgs.prototype, "data", void 0);
exports.CreateManyAndReturnSubtaskArgs = CreateManyAndReturnSubtaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnSubtaskArgs);
