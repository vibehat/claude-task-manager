"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelWhereUniqueInput_1 = require("../../../inputs/IssueLabelWhereUniqueInput");
let DeleteOneIssueLabelArgs = class DeleteOneIssueLabelArgs {
};
exports.DeleteOneIssueLabelArgs = DeleteOneIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], DeleteOneIssueLabelArgs.prototype, "where", void 0);
exports.DeleteOneIssueLabelArgs = DeleteOneIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneIssueLabelArgs);
