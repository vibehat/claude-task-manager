"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleWhereInput_1 = require("../../../inputs/CycleWhereInput");
let DeleteManyCycleArgs = class DeleteManyCycleArgs {
};
exports.DeleteManyCycleArgs = DeleteManyCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], DeleteManyCycleArgs.prototype, "where", void 0);
exports.DeleteManyCycleArgs = DeleteManyCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCycleArgs);
