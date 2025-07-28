"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateManyInput_1 = require("../../../inputs/CycleCreateManyInput");
let CreateManyAndReturnCycleArgs = class CreateManyAndReturnCycleArgs {
};
exports.CreateManyAndReturnCycleArgs = CreateManyAndReturnCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleCreateManyInput_1.CycleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnCycleArgs.prototype, "data", void 0);
exports.CreateManyAndReturnCycleArgs = CreateManyAndReturnCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnCycleArgs);
