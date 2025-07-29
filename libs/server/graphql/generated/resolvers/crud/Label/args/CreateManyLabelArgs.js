"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateManyInput_1 = require("../../../inputs/LabelCreateManyInput");
let CreateManyLabelArgs = class CreateManyLabelArgs {
};
exports.CreateManyLabelArgs = CreateManyLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelCreateManyInput_1.LabelCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLabelArgs.prototype, "data", void 0);
exports.CreateManyLabelArgs = CreateManyLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLabelArgs);
