"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateInput_1 = require("../../../inputs/IssuePriorityCreateInput");
let CreateOneIssuePriorityArgs = class CreateOneIssuePriorityArgs {
};
exports.CreateOneIssuePriorityArgs = CreateOneIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCreateInput_1.IssuePriorityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityCreateInput_1.IssuePriorityCreateInput)
], CreateOneIssuePriorityArgs.prototype, "data", void 0);
exports.CreateOneIssuePriorityArgs = CreateOneIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneIssuePriorityArgs);
