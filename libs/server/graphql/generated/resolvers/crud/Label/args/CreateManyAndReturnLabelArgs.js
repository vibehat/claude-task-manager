"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateManyInput_1 = require("../../../inputs/LabelCreateManyInput");
let CreateManyAndReturnLabelArgs = class CreateManyAndReturnLabelArgs {
};
exports.CreateManyAndReturnLabelArgs = CreateManyAndReturnLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelCreateManyInput_1.LabelCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnLabelArgs.prototype, "data", void 0);
exports.CreateManyAndReturnLabelArgs = CreateManyAndReturnLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnLabelArgs);
