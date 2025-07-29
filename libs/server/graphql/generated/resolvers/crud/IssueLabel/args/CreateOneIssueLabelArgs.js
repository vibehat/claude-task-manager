"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateInput_1 = require("../../../inputs/IssueLabelCreateInput");
let CreateOneIssueLabelArgs = class CreateOneIssueLabelArgs {
};
exports.CreateOneIssueLabelArgs = CreateOneIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateInput_1.IssueLabelCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateInput_1.IssueLabelCreateInput)
], CreateOneIssueLabelArgs.prototype, "data", void 0);
exports.CreateOneIssueLabelArgs = CreateOneIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneIssueLabelArgs);
