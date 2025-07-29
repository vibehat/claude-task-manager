"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateManyInput_1 = require("../../../inputs/CycleCreateManyInput");
let CreateManyCycleArgs = class CreateManyCycleArgs {
};
exports.CreateManyCycleArgs = CreateManyCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateManyInput_1.CycleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCycleArgs.prototype, "data", void 0);
exports.CreateManyCycleArgs = CreateManyCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCycleArgs);
