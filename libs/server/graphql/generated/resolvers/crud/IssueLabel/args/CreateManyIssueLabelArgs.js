"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyInput_1 = require("../../../inputs/IssueLabelCreateManyInput");
let CreateManyIssueLabelArgs = class CreateManyIssueLabelArgs {
};
exports.CreateManyIssueLabelArgs = CreateManyIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateManyInput_1.IssueLabelCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyIssueLabelArgs.prototype, "data", void 0);
exports.CreateManyIssueLabelArgs = CreateManyIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyIssueLabelArgs);
