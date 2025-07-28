"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelWhereInput_1 = require("../../../inputs/IssueLabelWhereInput");
let DeleteManyIssueLabelArgs = class DeleteManyIssueLabelArgs {
};
exports.DeleteManyIssueLabelArgs = DeleteManyIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], DeleteManyIssueLabelArgs.prototype, "where", void 0);
exports.DeleteManyIssueLabelArgs = DeleteManyIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyIssueLabelArgs);
