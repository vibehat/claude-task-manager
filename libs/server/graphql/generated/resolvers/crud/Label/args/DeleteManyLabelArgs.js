"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelWhereInput_1 = require("../../../inputs/LabelWhereInput");
let DeleteManyLabelArgs = class DeleteManyLabelArgs {
};
exports.DeleteManyLabelArgs = DeleteManyLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], DeleteManyLabelArgs.prototype, "where", void 0);
exports.DeleteManyLabelArgs = DeleteManyLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLabelArgs);
